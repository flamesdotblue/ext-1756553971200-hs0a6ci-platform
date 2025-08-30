function Gameplay() {
  return (
    <section id="gameplay" className="relative py-24 bg-[#0A0A12]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,0,128,0.06),transparent_60%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-bold">In-Game Battle Footage</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            See squads clash as structures buckle and the grid reshapes under fire.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-xl">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0Z48GsYIY-k?rel=0&modestbranding=1&color=white"
              title="Gridfall Battle Footage"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { k: '1', t: 'Reactive Terrain', d: 'Supports fail, floors fall—use the chaos to isolate targets.' },
            { k: '2', t: 'Synergized Squads', d: 'Chain abilities across classes to trigger devastating combos.' },
            { k: '3', t: 'Time-Pressed Turns', d: 'Momentum meter rewards decisive play under pressure.' },
          ].map((c) => (
            <div key={c.k} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-cyan-300/80 font-mono">Protocol {c.k}</div>
              <div className="mt-1 font-semibold text-lg">{c.t}</div>
              <p className="mt-1 text-white/70 text-sm">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gameplay;
