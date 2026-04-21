const PLACEHOLDER = `The city lights are fading now
I walk alone down empty streets
The rain keeps falling on my soul
And nothing ever feels complete`

export default function Analizador({ onAnalizar, analizando }) {
  function handleSubmit(e) {
    e.preventDefault()
    const letra = e.target.letra.value.trim()
    if (letra) onAnalizar(letra)
  }

  return (
    <section className="px-4 sm:px-6 pb-16" style={{ backgroundColor: "#0F0F1A" }}>
      <div className="max-w-2xl mx-auto">
        <div className="rounded-3xl p-4 sm:p-8 backdrop-blur-sm bg-white/5 border border-white/10">
          <div className="mb-6">
            <h2 className="font-syne font-bold text-2xl text-white mb-1">
              Pega tu letra aquí
            </h2>
            <p className="font-dm text-gray-400 text-sm">
              Cualquier idioma · Cualquier género · Cualquier era
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <textarea
              name="letra"
              placeholder={PLACEHOLDER}
              className="
                w-full h-40 sm:h-48 rounded-2xl bg-transparent border border-white/10
                px-5 py-4 font-dm text-gray-200 text-sm leading-relaxed
                placeholder:text-gray-600 placeholder:italic
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                resize-none transition
              "
            />

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={analizando}
                className="
                  w-full sm:max-w-md py-4 rounded-2xl font-syne font-bold text-white text-base tracking-wide
                  bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700
                  hover:from-purple-700 hover:via-pink-700 hover:to-purple-800
                  hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                  hover:scale-[1.02]
                  disabled:opacity-70 disabled:cursor-not-allowed
                  shadow-lg shadow-purple-900/60
                  transition-all duration-200 active:scale-[0.98]
                "
              >
                {analizando ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Analizando…
                  </span>
                ) : (
                  "✨ Analizar"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
