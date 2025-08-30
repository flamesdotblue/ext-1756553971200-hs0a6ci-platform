function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xl font-bold tracking-wide">GRIDFALL</div>
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} Gridfall Interactive</div>
        </div>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#gameplay" className="hover:text-white">Gameplay</a>
          <a href="#" className="hover:text-white">Press Kit</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
