import { useState, useCallback } from "react"
import Hero from "./components/Hero"
import Analizador from "./components/Analizador"
import {
  CardGenero,
  CardEstadoAnimo,
  CardArtistas,
  CardHistoria,
} from "./components/ResultadoCard"
import Footer from "./components/Footer"

// ─────────────────────────────────────────────
// Adaptador: JSON de la IA → formato de las cards
// ─────────────────────────────────────────────
function adaptarRespuesta(ia) {
  const colores = ["bg-purple-400", "bg-pink-400", "bg-yellow-400"]
  return {
    genero: {
      titulo:      "Género Musical",
      valor:       ia.genre,
      descripcion: ia.culturalInfluence || `Género detectado: ${ia.genre}`,
      icono:       "🎸",
      badge:       "Identificado",
    },
    estadoAnimo: {
      titulo:      "Estado de Ánimo",
      valor:       ia.mood,
      descripcion: ia.summary || `Nivel de energía: ${ia.energy}`,
      icono:       "⚡",
      badge:       "Detectado",
    },
    artistasSimilares: {
      titulo:   "Artistas Similares",
      artistas: (ia.similarArtists || []).map((nombre, i) => ({
        nombre,
        color: colores[i % colores.length],
      })),
      icono: "🎤",
      badge: "Relacionados",
    },
    historia: {
      titulo: "Historia del Género",
      partes: [{ texto: ia.history || "Historia no disponible.", negrita: false }],
      icono:  "📖",
      badge:  "Contexto",
    },
  }
}

// ─────────────────────────────────────────────
// App
// ─────────────────────────────────────────────
export default function App() {
  const [resultados, setResultados] = useState(null)
  const [analizando, setAnalizando] = useState(false)
  const [error, setError]           = useState(null)
  const [key, setKey]               = useState(0)

  const handleAnalizar = useCallback(async (letra) => {
    setResultados(null)
    setError(null)
    setAnalizando(true)

    try {
      // Llama al endpoint proxy de Vite → que ejecuta analyze.py
      const response = await fetch("/api/analyze", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ lyrics: letra }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
        return
      }

      setKey((k) => k + 1)
      setResultados(adaptarRespuesta(data))

      setTimeout(() => {
        document.getElementById("resultados")?.scrollIntoView({ behavior: "smooth" })
      }, 100)

    } catch (err) {
      setError("No se pudo conectar con el analizador. ¿Está corriendo el servidor?")
    } finally {
      setAnalizando(false)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col font-dm" style={{ backgroundColor: "#0F0F1A" }}>
      <Hero />
      <Analizador onAnalizar={handleAnalizar} analizando={analizando} />

      {error && (
        <div role="alert" className="px-6 pb-6">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-red-300 text-sm font-dm">
              ⚠️ {error}
            </div>
          </div>
        </div>
      )}

      {resultados && (
        <section id="resultados" className="px-6 pb-20" style={{ backgroundColor: "#0F0F1A" }}>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-600/50 to-transparent" />
              <h2 className="font-syne font-bold text-purple-300/80 text-sm tracking-widest uppercase">
                Resultados del Análisis
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-600/50 to-transparent" />
            </div>
            <div key={key} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <CardGenero      data={resultados.genero}            delay="0ms"   />
              <CardEstadoAnimo data={resultados.estadoAnimo}       delay="120ms" />
              <CardArtistas    data={resultados.artistasSimilares} delay="240ms" />
              <CardHistoria    data={resultados.historia}          delay="360ms" />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}