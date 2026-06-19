import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';
import { ImageLoader } from './ImageLoader';
import pizzaHeroImg from '../assets/images/rotating_pizza_hero_1781640786266.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-dark">
      {/* Decors */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-charcoal text-primary font-bold text-sm mb-6 shadow-sm border border-primary/20">
              <span className="text-lg">🍝</span> Livraison 100% Gratuite
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5rem] font-serif text-cream font-bold mb-6 leading-[1.1] tracking-tight">
              L'authentique <br />
              <span className="text-primary italic">pizza italienne</span><br />
              chez vous.
            </h1>
            <p className="text-lg text-gray-modern mb-10 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
              Découvrez l'Atelier du Pizzaiolo à Dély Ibrahim. Des ingrédients frais, une pâte artisanale et un savoir-faire unique.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#menu"
                className="px-8 py-4 bg-primary text-dark rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-[0_8px_20px_rgba(212,176,140,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Commander
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-charcoal border border-gray-800 text-cream rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <span className="w-10 h-10 rounded-full bg-dark flex items-center justify-center text-primary">
                  <Play className="w-4 h-4 ml-1 fill-primary" />
                </span>
                Notre Histoire
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
               <div className="flex -space-x-4">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-12 h-12 rounded-full border-4 border-dark shadow-sm z-10" />
                 ))}
                 <div className="w-12 h-12 rounded-full border-4 border-dark shadow-sm bg-charcoal flex items-center justify-center relative z-0">
                    <span className="text-sm font-bold text-gray-modern">+2k</span>
                 </div>
               </div>
               <div className="text-sm">
                 <p className="font-bold text-cream">Plus de 200 avis</p>
                 <p className="text-gray-modern font-medium">⭐ 4.6 / 5 sur Google</p>
               </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto lg:h-[700px] flex items-center justify-center"
          >
             <div className="relative w-full max-w-[400px] lg:max-w-[500px] mx-auto lg:absolute lg:right-[5%]">
               {/* Decorative background behind */}
               <div className="absolute inset-[-5%] bg-primary/20 rounded-[2.5rem] rotate-3 filter blur-xl animate-pulse" />
               <div className="absolute inset-[-2%] bg-charcoal rounded-[2.5rem] -rotate-2" />
               
               <div className="w-full h-auto rounded-full overflow-hidden relative z-10 shadow-2xl border-8 border-charcoal bg-dark aspect-square flex items-center justify-center">
                 <motion.img
                   src={pizzaHeroImg}
                   alt="Authentique pizza de l'Atelier du Pizzaiolo"
                   animate={{ rotate: 360 }}
                   transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                   className="w-[105%] h-[105%] object-cover object-center max-w-none"
                   loading="eager"
                   style={{ imageRendering: 'high-quality' as any }}
                 />
              </div>
               
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-[10%] left-[-15%] bg-charcoal p-4 rounded-2xl shadow-xl z-20 hidden sm:block border border-gray-800 backdrop-blur-sm bg-opacity-90"
               >
                 <h3 className="font-bold text-xl text-cream">L'Atelier</h3>
                 <p className="text-primary font-bold text-sm">du Pizzaiolo</p>
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-[10%] right-[-15%] bg-charcoal p-4 rounded-2xl shadow-xl z-20 hidden sm:flex gap-4 items-center border border-gray-800 backdrop-blur-sm bg-opacity-90"
               >
                 <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-2xl border border-gray-800">
                   📍
                 </div>
                 <div>
                   <p className="font-bold text-cream">Dély Ibrahim</p>
                   <p className="text-gray-modern font-medium text-xs uppercase tracking-wider">Alger</p>
                 </div>
               </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
