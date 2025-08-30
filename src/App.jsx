import Hero from './components/Hero';
import Features from './components/Features';
import Gameplay from './components/Gameplay';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Features />
      <Gameplay />
      <Footer />
    </div>
  );
}

export default App;
