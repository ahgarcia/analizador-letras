// server/index.js
// Puente Express que ejecuta python/analyze.py como proceso hijo
// React (Vite) hace fetch a /api/analyze → este server lo recibe
// → ejecuta analyze.py → devuelve el JSON al frontend

import express from "express"
import cors from "cors"
import { spawn } from "child_process"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

// ─────────────────────────────────────────────
// CORS — configurable por variable de entorno
// En dev: http://localhost:5173 (Vite)
// En prod: dominio real via ALLOWED_ORIGIN
// ─────────────────────────────────────────────
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || "http://localhost:5173"
}))

app.use(express.json())

// ─────────────────────────────────────────────
// Python path — configurable por variable de entorno
// En dev: .venv local
// En prod: python3 del sistema o path del servidor
// ─────────────────────────────────────────────
const pythonPath = process.env.PYTHON_PATH ||
  new URL("../python/.venv/bin/python3", import.meta.url).pathname

const scriptPath = join(__dirname, "..", "python", "analyze.py")

// ─────────────────────────────────────────────
// Endpoint principal
// ─────────────────────────────────────────────
app.post("/api/analyze", (req, res) => {
  const { lyrics } = req.body

  // Validación de entrada
  if (!lyrics || lyrics.trim().length === 0) {
    return res.json({ error: "Falta la letra de la canción." })
  }

  if (lyrics.length > 5000) {
    return res.json({ error: "La letra es demasiado larga. Máximo 5000 caracteres." })
  }

  const py = spawn(pythonPath, [scriptPath])

  let output    = ""
  let errOutput = ""

  // Timeout — evita requests colgados indefinidamente
  const timeout = setTimeout(() => {
    py.kill()
    res.json({ error: "El análisis tardó demasiado. Intenta de nuevo." })
  }, 30000)

  // Enviar la letra por stdin — igual que los labs de mslearn
  py.stdin.write(lyrics)
  py.stdin.end()

  py.stdout.on("data", (data) => { output += data.toString() })
  py.stderr.on("data", (data) => { errOutput += data.toString() })

  py.on("close", (code) => {
    clearTimeout(timeout)
    if (errOutput) console.error("[analyze.py stderr]:", errOutput)
    try {
      const result = JSON.parse(output.trim())
      res.json(result)
    } catch {
      res.json({ error: "El script Python devolvió una respuesta inesperada." })
    }
  })
})

// ─────────────────────────────────────────────
// Health check
// ─────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({ status: "ok", python: pythonPath })
})

// ─────────────────────────────────────────────
// Puerto — configurable por variable de entorno
// ─────────────────────────────────────────────
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Bridge server corriendo en http://localhost:${PORT}`)
  console.log(`Python path: ${pythonPath}`)
  console.log(`Script path: ${scriptPath}`)
})