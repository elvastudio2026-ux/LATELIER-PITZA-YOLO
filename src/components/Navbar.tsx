import { useState, useEffect } from 'react';
import { Menu, X, Pizza, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Avis Clients', href: '#reviews' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-sm py-4 border-b border-charcoal' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="bg-primary p-2.5 rounded-2xl group-hover:rotate-12 transition-transform duration-300 shadow-md">
                <Pizza className="w-6 h-6 text-dark" />
              </div>
              <span className="font-serif text-2xl font-bold text-cream group-hover:text-primary transition-colors">
                L'Atelier
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full font-medium text-gray-modern hover:text-primary hover:bg-charcoal transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-primary text-dark font-bold rounded-full hover:bg-opacity-90 transition-all shadow-[0_4px_14px_rgba(212,176,140,0.4)] hover:shadow-[0_6px_20px_rgba(212,176,140,0.5)] transform hover:-translate-y-0.5"
            >
              Commander
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cream p-2 bg-charcoal rounded-full shadow-sm hover:text-primary transition-colors border border-gray-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark shadow-xl border-t border-charcoal overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-base font-bold text-cream hover:bg-charcoal hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-charcoal">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center py-4 bg-primary text-dark font-bold rounded-2xl shadow-md"
                >
                  Commander Maintenant
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
