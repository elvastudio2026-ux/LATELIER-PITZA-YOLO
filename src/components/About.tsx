import { motion } from 'motion/react';
import { ChefHat, Leaf, Clock, Utensils } from 'lucide-react';
import { ImageLoader } from './ImageLoader';
import facadeImg from '../assets/images/facade-restaurant.jpg';

const features = [
  { icon: ChefHat, title: 'Artisanal', desc: 'Préparé avec passion et savoir-faire' },
  { icon: Leaf, title: 'Frais', desc: 'Des ingrédients locaux et de saison' },
  { icon: Clock, title: 'Service', desc: 'Rapide et toujours avec le sourire' },
  { icon: Utensils, title: 'Authentique', desc: 'De véritables recettes italiennes' },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageLoader 
                src={facadeImg} 
                alt="Devanture de l'Atelier du Pizzaiolo" 
                className="w-full h-auto aspect-video md:aspect-[4/3] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-white border border-gray-100 p-6 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
              <p className="font-serif font-bold text-4xl text-primary mb-1">10+</p>
              <p className="text-gray-600 font-medium text-sm leading-tight">Années de passion pour la pizza</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase mb-3 block text-sm">Notre Histoire</span>
            <h2 className="text-4xl md:text-5xl font-serif text-dark font-bold mb-6 leading-tight">
              L'Art de la Pizza, <br />
              <span className="text-primary">Tradition Italienne</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
              Chez L'Atelier du Pizzaiolo, chaque pizza raconte une histoire. Notre 
              pâte repose pendant 48h pour garantir une légèreté incomparable. 
              Nous cuisons dans la plus pure tradition pour vous offrir un petit 
              bout d'Italie en plein cœur de Dély Ibrahim.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary mb-1 shadow border border-gray-100">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-dark text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
