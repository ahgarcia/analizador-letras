export default function Footer() {
  return (
    <footer className="mt-auto bg-[#0F0F1A] border-t border-white/5 py-10 px-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-3">
        <div aria-hidden="true" className="flex items-center gap-2 text-2xl">
          <span>🎸</span>
          <span>⚡</span>
          <span>🎤</span>
        </div>
        <p className="font-syne font-bold text-white text-lg tracking-wide">
          Analizador de Letras
        </p>
        <p className="font-dm text-gray-400 text-sm">
          Powered by Azure AI Foundry
          <span className="hidden sm:inline"> · </span>
          <br className="sm:hidden" />
          Agente MusicAnalyzer
          <span className="hidden sm:inline"> · </span>
          <br className="sm:hidden" />
          gpt-4.1
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-purple-600 to-pink-600 mt-1" />
        <p className="font-dm text-gray-600 text-xs">
          © {new Date().getFullYear()} · Hecho con React + Vite + Tailwind CSS · AI-103 · ITO
        </p>
      </div>
    </footer>
  )
}