export default function Hero() {
  return (
    <>
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24 overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">

        {/* Dot grid simulating concert crowd */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Animated floating particles */}
        <div className="absolute w-32 h-32 rounded-full bg-purple-500/10 blur-2xl top-[12%] left-[8%]  animate-float-slow" />
        <div className="absolute w-20 h-20 rounded-full bg-pink-400/15  blur-xl  top-[20%] right-[12%] animate-float-mid"  style={{ animationDelay: "1.2s" }} />
        <div className="absolute w-16 h-16 rounded-full bg-purple-400/10 blur-xl  bottom-[25%] left-[18%] animate-float-fast" style={{ animationDelay: "0.5s" }} />
        <div className="absolute w-24 h-24 rounded-full bg-pink-500/10  blur-2xl bottom-[15%] right-[10%] animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute w-10 h-10 rounded-full bg-yellow-300/10 blur-lg  top-[40%] left-[30%]  animate-float-mid"  style={{ animationDelay: "0.8s" }} />
        <div className="absolute w-14 h-14 rounded-full bg-purple-300/10 blur-lg  top-[30%] right-[30%] animate-float-fast" style={{ animationDelay: "1.8s" }} />

        {/* Stage light beams */}
        <div className="absolute bottom-0 left-1/4  w-1 h-64 bg-gradient-to-t from-yellow-300/30 to-transparent  rotate-12  blur-sm" />
        <div className="absolute bottom-0 left-1/2  w-1 h-80 bg-gradient-to-t from-pink-300/30  to-transparent  -rotate-6  blur-sm" />
        <div className="absolute bottom-0 right-1/4 w-1 h-64 bg-gradient-to-t from-purple-300/30 to-transparent -rotate-12 blur-sm" />

        {/* Glow orbs */}
        <div className="absolute top-10  right-10 w-48 h-48 bg-pink-500/20   rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto w-full">
          {/* Glass badge — centered on all screens */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-dm text-white/80">
              <span>🎵</span>
              <span>Powered by IA Musical</span>
            </div>
          </div>

          <h1 className="font-righteous tracking-tight text-4xl sm:text-5xl lg:text-7xl leading-tight mb-5">
            <span className="text-white">Analiza tus </span>
            <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Letras
            </span>
            <br />
            <span className="text-white">de </span>
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 bg-clip-text text-transparent">
              Canciones
            </span>
          </h1>

          <p className="font-dm text-white/70 text-sm sm:text-base lg:text-xl max-w-xl mx-auto leading-relaxed">
            Pega la letra de una canción y descubre su{" "}
            <span className="text-pink-300 font-medium">género</span>,{" "}
            <span className="text-yellow-300 font-medium">estado de ánimo</span>{" "}
            y mucho más
          </p>
        </div>

        {/* Bottom separator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
      </section>

      {/* Transition band hero → dark background */}
      <div className="h-16 bg-gradient-to-b from-purple-900 to-[#0F0F1A]" />
    </>
  )
}
