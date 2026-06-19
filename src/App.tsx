import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { FAQ } from './components/FAQ';
import { Gallery } from './components/Gallery';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-cream bg-dark selection:bg-primary selection:text-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Menu />
      <FAQ />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
