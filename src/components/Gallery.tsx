import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import { ImageLoader } from './ImageLoader';
import pizzaSausageBoxImg from '../assets/images/pizza_sausage_box_1781639223432.jpg';

const galleryImages = [
  { id: 1, src: '/galerie-1.jpg', fallback: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2681&auto=format&fit=crop', alt: 'Nos délicieuses pizzas' },
  { id: 2, src: '/galerie-2.jpg', fallback: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2670&auto=format&fit=crop', alt: 'Préparation authentique' },
  { id: 3, src: pizzaSausageBoxImg, fallback: '', alt: 'Pizza à la viande' },
  { id: 4, src: '/pizza-speciale.jpg', fallback: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop', alt: 'Pizza spéciale' },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-dark border-t border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase mb-3 block text-sm">En Images</span>
          <h2 className="text-4xl md:text-5xl font-serif text-cream font-bold mb-6">Notre Univers</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={img.id}
              className="relative group h-64 lg:h-80 overflow-hidden rounded-xl cursor-pointer border border-gray-800"
            >
              <ImageLoader 
                src={img.src} 
                fallbackSrc={img.fallback}
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="w-8 h-8 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-gray-400 hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageLoader 
                src={selectedImage.src}
                fallbackSrc={selectedImage.fallback}
                alt={selectedImage.alt}
                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-cream text-center mt-4 text-lg font-medium">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
