export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-950 py-10 px-6 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-3">
        <div className="flex items-center gap-2 text-2xl">
          <span>🎸</span>
          <span>⚡</span>
          <span>🎤</span>
        </div>
        <p className="font-syne font-bold text-white text-lg tracking-wide">
          Analizador de Letras
        </p>
        <p className="font-dm text-gray-500 text-sm">
          Proyecto de demostración
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          Datos de ejemplo
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          Sin conexión a APIs
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-purple-600 to-pink-600 mt-1" />
        <p className="font-dm text-gray-600 text-xs">
          © {new Date().getFullYear()} · Hecho con React + Vite + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
