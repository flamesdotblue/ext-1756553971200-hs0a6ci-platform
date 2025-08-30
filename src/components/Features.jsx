import { Shield, Zap, Map, Layers } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Adaptive Cover System',
    desc: 'Buildings crumble and routes shift. Use dynamic cover, collapsing floors, and debris to outmaneuver enemies.'
  },
  {
    icon: Map,
    title: 'Living Grid',
    desc: 'The battlefield is a living system of tiles with hazards, power nodes, and destructible supports.'
  },
  {
    icon: Layers,
    title: 'Vertical Tactics',
    desc: 'Ascend rooftops or descend into underlevels. Control elevation to dominate sightlines and damage falloff.'
  },
  {
    icon: Zap,
    title: 'Momentum Engine',
    desc: 'Chaining actions builds momentum. Sync squad abilities to trigger high-impact cascading plays.'
  }
];

function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black to-[#070710]">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="w-full h-full animate-[gridmove_18s_linear_infinite]" style={{
          backgroundImage: `linear-gradient(rgba(255,0,90,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          backgroundPosition: '0 0, 0 0'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold">Command The Collapse</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Precision tactics in unstable environments. Every decision ripples across the grid.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-600">
                <f.icon className="text-black" size={22} />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`@keyframes gridmove { 0% { background-position: 0 0, 0 0; } 100% { background-position: 64px 64px, 64px 64px; } }`}
      </style>
    </section>
  );
}

export default Features;
