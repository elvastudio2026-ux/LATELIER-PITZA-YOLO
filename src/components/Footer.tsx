import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Pizza, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-cream pt-24 pb-12 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-full">
                <Pizza className="w-6 h-6 text-dark" />
              </div>
              <span className="font-serif text-2xl font-bold text-cream">
                L'Atelier
              </span>
            </div>
            <p className="text-gray-modern leading-relaxed">
              L'authentique expérience italienne à Dély Ibrahim. Des pizzas préparées avec passion, des ingrédients frais et un savoir-faire artisanal.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark border border-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-gray-400 hover:text-dark">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark border border-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-gray-400 hover:text-dark">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark border border-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-gray-400 hover:text-dark">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-cream">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'À Propos', 'Menu', 'Galerie', 'Avis'].map((link) => (
                <li key={link}>
                  <a href={`#${link === 'Accueil' ? 'home' : link === 'À Propos' ? 'about' : link === 'Avis' ? 'reviews' : link.toLowerCase()}`} className="text-gray-modern hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-cream">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-modern">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>140 Hay El Bina<br />Dély Ibrahim, Alger</span>
              </li>
              <li className="flex gap-3 text-gray-modern items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>0541 65 12 80</span>
              </li>
              <li className="flex gap-3 text-gray-modern items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contact@atelier-pizzaiolo.dz</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-cream">Horaires</h4>
            <ul className="space-y-4 text-gray-modern">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Lundi - Jeudi</span>
                <span className="text-cream">10h00 - 00h00</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Vendredi</span>
                <span className="text-cream">14h00 - 00h00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Samedi - Dimanche</span>
                <span className="text-cream">10h00 - 00h00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-modern text-sm">
            © {new Date().getFullYear()} L'Atelier du Pizzaiolo. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-modern">
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
          </div>
        </div>

      </div>

      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_rgba(212,176,140,0.5)] group"
      >
        <ChevronUp className="w-6 h-6 text-dark" />
      </button>

    </footer>
  );
}
