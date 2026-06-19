import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  { id: 1, name: 'Raylim Pics', text: "Très belle expérience ! Les pizzas en grande taille (L et XL) sont généreusement servies et absolument savoureuses. C'est une adresse incontournable que je recommande vivement pour les amateurs de bonnes pizzas à Alger.", rating: 5 },
  { id: 2, name: 'Radouandro', text: "Excellent accueil général ! Le service est très sympathique et respectueux. La pizza est délicieuse, avec une pâte particulièrement bien réussie.", rating: 5 },
  { id: 3, name: 'Fazia Serraye', text: "Des pizzas excellentes, tout particulièrement les recettes à base de crème fraîche. La pâte est fine, les saveurs sont généreuses et le service est rapide. Je recommande fortement !", rating: 5 },
  { id: 4, name: 'Ihcène Menous', text: "Je suis très déçue. Mes pizzas sont arrivées froides et manquaient de goût. Ce fut une mauvaise expérience globale.", rating: 1 },
  { id: 5, name: 'Yacine Bo', text: "Le service est correct et le personnel est agréable. Cependant, j'ai trouvé la pizza moyenne en goût et un peu trop grasse à mon goût.", rating: 3 },
  { id: 6, name: 'Kounen Hmd', text: "Expérience décevante. Le service a été lent, il y a eu une erreur dans ma commande et les pizzas servies étaient froides.", rating: 1 },
  { id: 7, name: 'Marouane Mesbah', text: "Une très bonne pizza servie par une équipe au top ! Le service sur place est véritablement agréable.", rating: 5 },
  { id: 8, name: 'Nassim', text: "Je trouve que la qualité est en baisse. La pizza n'était pas assez cuite et les ingrédients m'ont semblé de qualité moyenne.", rating: 2 },
  { id: 9, name: 'Melissa', text: "Très bon accueil ! Le service est très rapide et le personnel est d'une grande gentillesse. Nous avons passé une expérience en famille des plus agréables.", rating: 5 },
  { id: 10, name: 'Monsieur', text: "Les produits sont frais et les pizzas sont tout bonnement excellentes. J'en repars très satisfait !", rating: 5 },
  { id: 11, name: 'El Bachir', text: "Le service est rapide, et les pizzas proposées sont à la fois variées et délicieuses. Un très bon rapport qualité-service !", rating: 5 },
  { id: 12, name: 'El Mehdi IDIR', text: "C'est une excellente pizzeria où je suis toujours satisfait depuis des années. Le rapport qualité-prix est très bon.", rating: 5 },
  { id: 13, name: 'Hichem Mekdad', text: "La pizza est tout simplement excellente et la pâte est fine comme il faut. De plus, le lieu est d'une très grande propreté. C'est une très bonne adresse !", rating: 5 },
  { id: 14, name: 'Black Pearl', text: "C'est un endroit familial, très propre et calme. Le service est rapide et les pizzas sont de grande qualité.", rating: 5 },
  { id: 15, name: 'Farid Mazri', text: "L'espace est un peu petit et le service a été lent. Je trouve les prix un peu élevés par rapport à la prestation proposée.", rating: 3 },
  { id: 16, name: 'Sarah Bou', text: "Une très bonne expérience ! Le service fait preuve d'un grand professionnalisme et l'ambiance, tout comme le lieu, est très propre. Je recommande.", rating: 5 },
  { id: 17, name: 'Stambouli Abderrahman', text: "C'est un vrai coup de cœur ! Les pizzas sont tout simplement magnifiques et l'accueil y est parfait.", rating: 5 },
  { id: 18, name: 'Ouassim Djida', text: "L'accueil est fort sympathique, mais j'ai trouvé la qualité des plats moyenne.", rating: 2 },
  { id: 19, name: 'ISQ_99K GB', text: "Une très bonne pizza dotée d'un goût si spécial, le tout servi par une équipe des plus agréables !", rating: 5 },
  { id: 20, name: 'Kddr Mehdi', text: "Une pizza excellente ! La pâte est parfaitement bien cuite et la garniture est vraiment très généreuse.", rating: 5 },
  { id: 21, name: 'Nour', text: "Absolument parmi les meilleures pizzas que j'ai goûtées à Alger ! De plus, l'accueil est très chaleureux et l'endroit est d'une grande propreté.", rating: 5 },
  { id: 22, name: 'Kasparov RSS', text: "Le goût est toujours aussi constant et la qualité reste excellente, et ce depuis de nombreuses années !", rating: 5 },
  { id: 23, name: 'Mohammed Hammoutene', text: "C'est tout bonnement l'une des meilleures pizzas que j’ai eu l'occasion de manger à Alger.", rating: 5 },
  { id: 24, name: 'Youcef Grini', text: "L'accueil est excellent et l'équipe fait preuve d'un très grand professionnalisme.", rating: 5 },
  { id: 25, name: 'Anissa Alahyane', text: "Les pizzas sont très savoureuses et les portions servies sont particulièrement généreuses.", rating: 5 },
  { id: 26, name: 'Fares Benyoucef', text: "De très bonnes pizzas cuisinées avec des ingrédients frais, avec un large choix à la carte.", rating: 5 },
  { id: 27, name: 'Neila Kaligaris', text: "C'est dommage car la pizza est très bonne, mais j'ai malheureusement constaté un problème concernant l'hygiène de l'établissement.", rating: 2 },
  { id: 28, name: 'Sofiane Mez', text: "C'est très probablement la meilleure pizza de tout Alger !", rating: 5 },
  { id: 29, name: 'Targgui Targgui', text: "Le service est excellent, la pizza est très bonne et l'ambiance du restaurant est remarquablement calme.", rating: 5 },
  { id: 30, name: 'Anis Benlalam', text: "Une très bonne pizza pour une expérience globale plus que satisfaisante !", rating: 5 },
  { id: 31, name: 'Dady Epau', text: "Certainement la meilleure pizza d’Alger ! L'endroit est d'une propreté irréprochable et l'accueil est parfait.", rating: 5 },
  { id: 32, name: 'Natsu Senoussi', text: "La pizza servie est correcte, mais je ne l'ai pas trouvée exceptionnelle.", rating: 3 },
  { id: 33, name: 'Djamil Sakhri', text: "Une qualité de pizza exceptionnelle, on se croirait vraiment dans un restaurant gourmet !", rating: 5 },
  { id: 34, name: 'Sofiane Kebbab', text: "La pizza est très bonne et l'accueil qui nous a été réservé était particulièrement chaleureux.", rating: 5 },
  { id: 35, name: 'Yacine Lahlouh', text: "La pizza est bonne, cependant je trouve que les prix sont un peu trop élevés.", rating: 3 },
  { id: 36, name: 'Ahmed', text: "Elle entre directement dans mon top 3 des meilleures pizzas que j’ai jamais mangées !", rating: 5 },
  { id: 37, name: 'So', text: "Les produits utilisés sont bien frais pour une pizza au final vraiment très bonne !", rating: 5 },
  { id: 38, name: 'Médecine Dentaire', text: "À mon sens, c'est tout simplement la meilleure pizza d’Alger.", rating: 5 },
  { id: 39, name: 'Reguia', text: "La qualité du fromage utilisé n'était malheureusement pas au niveau de mes attentes.", rating: 2 },
  { id: 40, name: 'Ouaguenoune Sara', text: "Ma pizza était froide et manquait vraiment de goût.", rating: 2 },
  { id: 41, name: 'Sami Bougrine', text: "Une pizza excellente accompagnée d'un service absolument parfait.", rating: 5 },
  { id: 42, name: 'Aziz', text: "C'est un très bon restaurant pour passer un agréable moment et manger en famille.", rating: 5 },
  { id: 43, name: 'Hani Arafat', text: "Une pizza parfaite, avec un personnel et un service tout bonnement excellents !", rating: 5 },
  { id: 44, name: 'Nadjib Tidafi', text: "C'est la meilleure pizza que l'on puisse trouver sur Alger.", rating: 5 },
  { id: 45, name: 'Younes Gourad', text: "L'accueil et la qualité des produits sont tout simplement excellents.", rating: 5 },
  { id: 46, name: 'Karim Taleb', text: "C'est la meilleure pizza, et le service est absolument impeccable.", rating: 5 },
  { id: 47, name: 'Rym Tolba', text: "La pizza est bonne, mais malheureusement le service a été un peu lent.", rating: 3 },
  { id: 48, name: 'Nour Yahiaoui', text: "L'endroit est propre, mais j'ai trouvé la pizza plutôt moyenne.", rating: 3 },
  { id: 49, name: 'Sarra B', text: "Les pizzas sont réellement très bonnes, préparées avec des ingrédients de grande qualité.", rating: 5 }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none text-primary">
        <Quote className="w-64 h-64 text-primary" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-12">
          <span className="text-primary font-bold tracking-wider uppercase mb-3 block text-sm">Avis Clients</span>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl font-bold text-dark">4.3</span>
            <span className="text-xl text-gray-500">/ 5</span>
          </div>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-primary text-primary' : (i < 4.3 ? 'fill-primary/50 text-primary' : 'fill-gray-300 text-gray-300')}`} />
            ))}
          </div>
          <p className="text-gray-500 font-medium pt-2">Basé sur plus de 200 avis Google</p>
        </div>

        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="px-8 md:px-20 w-full"
            >
              <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < reviews[currentIndex].rating ? 'fill-primary text-primary' : 'fill-gray-300 text-gray-300'}`} />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed italic mb-8">
                "{reviews[currentIndex].text}"
              </p>
              <h4 className="font-bold text-dark text-lg uppercase tracking-wider">{reviews[currentIndex].name}</h4>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-dark transition-all text-gray-500 shadow-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-dark transition-all text-gray-500 shadow-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
