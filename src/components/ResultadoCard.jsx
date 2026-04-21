function Badge({ text, className }) {
  return (
    <span className={`inline-block text-xs font-dm font-semibold px-3 py-1 rounded-full ${className}`}>
      {text}
    </span>
  )
}

/* ── Género Musical ─────────────────────────────────────── */
export function CardGenero({ data, delay }) {
  return (
    <div
      className="relative rounded-3xl p-4 sm:p-6 overflow-hidden text-white
        bg-gradient-to-br from-red-500 via-orange-500 to-amber-400
        border border-orange-400/40
        shadow-lg shadow-orange-900/40
        opacity-0 animate-fade-in-up"
      style={{ animationDelay: delay, animationFillMode: "forwards" }}
    >
      <Badge text={data.badge} className="bg-white/20 text-white mb-4" />
      <h3 className="font-syne font-bold text-xl sm:text-2xl mb-1">{data.titulo}</h3>
      <p className="font-syne font-extrabold text-3xl mb-2">{data.valor}</p>
      <p className="font-dm text-sm text-white/80 leading-relaxed">{data.descripcion}</p>
      <span className="absolute bottom-4 right-4 text-6xl sm:text-8xl opacity-20 select-none">
        {data.icono}
      </span>
    </div>
  )
}

/* ── Estado de Ánimo ────────────────────────────────────── */
export function CardEstadoAnimo({ data, delay }) {
  return (
    <div
      className="relative rounded-3xl p-4 sm:p-6 overflow-hidden text-white
        bg-gradient-to-br from-orange-400 via-yellow-400 to-amber-300
        border border-yellow-300/40
        shadow-lg shadow-yellow-900/30
        opacity-0 animate-fade-in-up"
      style={{ animationDelay: delay, animationFillMode: "forwards" }}
    >
      <Badge text={data.badge} className="bg-white/20 text-white mb-4" />
      <h3 className="font-syne font-bold text-xl sm:text-2xl mb-1 text-orange-900/80">{data.titulo}</h3>
      <p className="font-syne font-extrabold text-3xl mb-2 text-orange-900">{data.valor}</p>
      <p className="font-dm text-sm text-orange-900/70 leading-relaxed">{data.descripcion}</p>
      <span className="absolute bottom-4 right-4 text-6xl sm:text-8xl opacity-20 select-none">
        {data.icono}
      </span>
    </div>
  )
}

/* ── Artistas Similares ─────────────────────────────────── */
export function CardArtistas({ data, delay }) {
  return (
    <div
      className="relative rounded-3xl p-4 sm:p-6 overflow-hidden text-white
        bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900
        border border-purple-500/30
        shadow-lg shadow-purple-900/50
        opacity-0 animate-fade-in-up"
      style={{ animationDelay: delay, animationFillMode: "forwards" }}
    >
      <Badge text={data.badge} className="bg-white/10 text-purple-200 mb-4" />
      <h3 className="font-syne font-bold text-xl sm:text-2xl mb-4">{data.titulo}</h3>
      <ul className="flex flex-col gap-2">
        {data.artistas.map((a) => (
          <li key={a.nombre} className="flex items-center gap-3 font-dm font-medium text-sm">
            <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${a.color}`} />
            {a.nombre}
          </li>
        ))}
      </ul>
      <span className="absolute bottom-4 right-4 text-6xl sm:text-8xl opacity-10 select-none">
        {data.icono}
      </span>
    </div>
  )
}

/* ── Historia del Género ────────────────────────────────── */
export function CardHistoria({ data, delay }) {
  return (
    <div
      className="relative rounded-3xl p-4 sm:p-6 overflow-hidden text-white
        bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500
        border border-cyan-400/40
        shadow-lg shadow-cyan-900/40
        opacity-0 animate-fade-in-up"
      style={{ animationDelay: delay, animationFillMode: "forwards" }}
    >
      <Badge text={data.badge} className="bg-white/20 text-white mb-4" />
      <h3 className="font-syne font-bold text-xl sm:text-2xl mb-3">{data.titulo}</h3>
      <p className="font-dm text-sm text-white/90 leading-relaxed">
        {data.partes.map((parte, i) =>
          parte.negrita ? (
            <strong key={i} className="font-bold text-white">
              {parte.texto}
            </strong>
          ) : (
            <span key={i}>{parte.texto}</span>
          )
        )}
      </p>
      <span className="absolute bottom-4 right-4 text-6xl sm:text-8xl opacity-20 select-none">
        {data.icono}
      </span>
    </div>
  )
}
