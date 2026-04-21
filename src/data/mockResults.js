export const mockResults = [
  /* 0 — Rock */
  {
    genero: {
      titulo: "Género Musical",
      valor: "Rock",
      descripcion: "Ritmo intenso, guitarras eléctricas y energía pura definen este género icónico.",
      icono: "🎸",
      badge: "Identificado",
    },
    estadoAnimo: {
      titulo: "Estado de Ánimo",
      valor: "Enérgico y Rebelde",
      descripcion: "La letra transmite una energía desbordante y un espíritu de libertad sin límites.",
      icono: "⚡",
      badge: "Detectado",
    },
    artistasSimilares: {
      titulo: "Artistas Similares",
      artistas: [
        { nombre: "Led Zeppelin", color: "bg-purple-400" },
        { nombre: "Aerosmith",    color: "bg-pink-400"   },
        { nombre: "AC/DC",        color: "bg-yellow-400" },
      ],
      icono: "🎤",
      badge: "Relacionados",
    },
    historia: {
      titulo: "Historia del Género",
      partes: [
        { texto: "El rock originó en los años ",  negrita: false },
        { texto: "50",                            negrita: true  },
        { texto: " con ",                         negrita: false },
        { texto: "guitarras eléctricas",          negrita: true  },
        { texto: " que definieron la ",           negrita: false },
        { texto: "rebeldía juvenil",              negrita: true  },
        { texto: " de toda una generación.",      negrita: false },
      ],
      icono: "📖",
      badge: "Contexto",
    },
  },

  /* 1 — Pop Latino */
  {
    genero: {
      titulo: "Género Musical",
      valor: "Pop Latino",
      descripcion: "Melodías pegadizas y letras apasionadas que dominan las listas en español.",
      icono: "🎹",
      badge: "Identificado",
    },
    estadoAnimo: {
      titulo: "Estado de Ánimo",
      valor: "Melancólico y Romántico",
      descripcion: "La letra evoca nostalgia, amor no correspondido y emociones a flor de piel.",
      icono: "💜",
      badge: "Detectado",
    },
    artistasSimilares: {
      titulo: "Artistas Similares",
      artistas: [
        { nombre: "Shakira",        color: "bg-pink-400"   },
        { nombre: "Alejandro Sanz", color: "bg-rose-400"   },
        { nombre: "Juanes",         color: "bg-orange-400" },
      ],
      icono: "🎤",
      badge: "Relacionados",
    },
    historia: {
      titulo: "Historia del Género",
      partes: [
        { texto: "El pop latino fusiona ",          negrita: false },
        { texto: "ritmos caribeños",                negrita: true  },
        { texto: " con estructuras ",               negrita: false },
        { texto: "pop occidentales",                negrita: true  },
        { texto: " desde los ",                     negrita: false },
        { texto: "años 90",                         negrita: true  },
        { texto: ", conquistando audiencias globales.", negrita: false },
      ],
      icono: "📖",
      badge: "Contexto",
    },
  },

  /* 2 — Reggaetón */
  {
    genero: {
      titulo: "Género Musical",
      valor: "Reggaetón",
      descripcion: "El ritmo urbano que fusiona dembow, trap y urbano latino en un solo beat.",
      icono: "🔊",
      badge: "Identificado",
    },
    estadoAnimo: {
      titulo: "Estado de Ánimo",
      valor: "Festivo y Sensual",
      descripcion: "La letra invita al baile, la fiesta y la conexión entre personas.",
      icono: "🔥",
      badge: "Detectado",
    },
    artistasSimilares: {
      titulo: "Artistas Similares",
      artistas: [
        { nombre: "Bad Bunny",    color: "bg-green-400"  },
        { nombre: "J Balvin",     color: "bg-yellow-400" },
        { nombre: "Daddy Yankee", color: "bg-blue-400"   },
      ],
      icono: "🎤",
      badge: "Relacionados",
    },
    historia: {
      titulo: "Historia del Género",
      partes: [
        { texto: "El reggaetón nació en ",          negrita: false },
        { texto: "Puerto Rico",                     negrita: true  },
        { texto: " en los ",                        negrita: false },
        { texto: "años 90",                         negrita: true  },
        { texto: " fusionando ",                    negrita: false },
        { texto: "reggae jamaiquino",               negrita: true  },
        { texto: " con ",                           negrita: false },
        { texto: "hip hop urbano",                  negrita: true  },
        { texto: ".",                               negrita: false },
      ],
      icono: "📖",
      badge: "Contexto",
    },
  },

  /* 3 — Balada */
  {
    genero: {
      titulo: "Género Musical",
      valor: "Balada",
      descripcion: "Composiciones lentas y emotivas que expresan el amor, la pérdida y el alma.",
      icono: "🎼",
      badge: "Identificado",
    },
    estadoAnimo: {
      titulo: "Estado de Ánimo",
      valor: "Nostálgico y Emotivo",
      descripcion: "La letra despierta recuerdos profundos y emociones que el tiempo no borra.",
      icono: "🌙",
      badge: "Detectado",
    },
    artistasSimilares: {
      titulo: "Artistas Similares",
      artistas: [
        { nombre: "Luis Miguel",    color: "bg-blue-400"   },
        { nombre: "Ricardo Arjona", color: "bg-indigo-400" },
        { nombre: "Maná",           color: "bg-cyan-400"   },
      ],
      icono: "🎤",
      badge: "Relacionados",
    },
    historia: {
      titulo: "Historia del Género",
      partes: [
        { texto: "La balada ",                         negrita: false },
        { texto: "romántica latinoamericana",          negrita: true  },
        { texto: " dominó las décadas de los ",        negrita: false },
        { texto: "80 y 90",                            negrita: true  },
        { texto: " con ",                              negrita: false },
        { texto: "letras de amor",                     negrita: true  },
        { texto: " que marcaron generaciones.",        negrita: false },
      ],
      icono: "📖",
      badge: "Contexto",
    },
  },
]
