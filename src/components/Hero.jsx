import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-[#050509]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/KeusF4lUkfKzhtGY/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300/80 tracking-widest uppercase text-xs">Tactical Descent Protocol</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
          GRIDFALL
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl">
          Command elite squads across collapsing cityscapes. Every tile matters. Every second counts.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#gameplay"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors"
          >
            Watch Battle Footage
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-6 py-3 transition-colors"
          >
            Explore Features
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
        }} />
      </div>
    </section>
  );
}

export default Hero;
