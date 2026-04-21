import { useState } from "react"
import Hero from "./components/Hero"
import Analizador from "./components/Analizador"
import {
  CardGenero,
  CardEstadoAnimo,
  CardArtistas,
  CardHistoria,
} from "./components/ResultadoCard"
import Footer from "./components/Footer"
import { mockResults } from "./data/mockResults"

export default function App() {
  const [resultados, setResultados] = useState(null)
  const [analizando, setAnalizando] = useState(false)
  const [key, setKey] = useState(0)

  function handleAnalizar(letra) {
    setResultados(null)
    setAnalizando(true)
    const indice = letra.length % 4
    setTimeout(() => {
      setAnalizando(false)
      setKey((k) => k + 1)
      setResultados(mockResults[indice])
      setTimeout(() => {
        document.getElementById("resultados")?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col font-dm" style={{ backgroundColor: "#0F0F1A" }}>
      <Hero />

      <Analizador onAnalizar={handleAnalizar} analizando={analizando} />

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
              <CardGenero       data={resultados.genero}             delay="0ms"   />
              <CardEstadoAnimo  data={resultados.estadoAnimo}        delay="120ms" />
              <CardArtistas     data={resultados.artistasSimilares}  delay="240ms" />
              <CardHistoria     data={resultados.historia}           delay="360ms" />
            </div>
          </div>
        </section>
      )}

      <div className="flex-1" style={{ backgroundColor: "#0F0F1A" }} />
      <Footer />
    </div>
  )
}
