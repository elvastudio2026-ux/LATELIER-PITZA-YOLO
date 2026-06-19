import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Heart, Star, X, Info, Leaf, Flame, Minus, Plus, ShoppingCart, Phone } from 'lucide-react';
import { ImageLoader } from './ImageLoader';
import calzoneImg from '../assets/images/calzone_classique_1781637903832.jpg';
import lasagneImg from '../assets/images/lasagna_bolognese_1781638772352.jpg';

const menuItems = [
  {
    id: 1,
    name: 'Pizza Margherita (L / XL)',
    desc: 'Sauce tomate San Marzano, mozzarella, basilic.',
    price: "600 / 1000",
    category: 'Pizzas',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop',
    ingredients: ['Sauce San Marzano', 'Mozzarella di Bufala', 'Basilic Frais', 'Huile d\'Olive Extra Vierge'],
    nutrition: { kcal: 850, prot: '35g', glucides: '120g' }
  },
  {
    id: 2,
    name: 'Pizza Quatre Fromages (L / XL)',
    desc: 'Mozzarella, gorgonzola, chèvre, parmesan.',
    price: "1000 / 1700",
    category: 'Pizzas',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop',
    ingredients: ['Mozzarella', 'Gorgonzola AOP', 'Chèvre affiné', 'Parmigiano Reggiano'],
    nutrition: { kcal: 1100, prot: '45g', glucides: '110g' }
  },
  {
    id: 3,
    name: 'Pizza Pepperoni (L / XL)',
    desc: 'Sauce tomate, mozzarella, double pepperoni américain.',
    price: "1000 / 1600",
    category: 'Pizzas',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Mozzarella', 'Pepperoni de Bœuf', 'Origan'],
    nutrition: { kcal: 980, prot: '40g', glucides: '115g' }
  },
  {
    id: 4,
    name: 'Pizza Végétarienne (L / XL)',
    desc: 'Poivrons grillés, champignons, olives noires, oignons.',
    price: "800 / 1200",
    category: 'Pizzas',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Mozzarella', 'Poivrons', 'Champignons', 'Olives', 'Oignons Rouges'],
    nutrition: { kcal: 750, prot: '25g', glucides: '130g' }
  },
  {
    id: 5,
    name: 'Calzone Classique (L / XL)',
    desc: 'Farci ricotta, mozzarella, jambon (halal) et tomate.',
    price: "1000 / 1500",
    category: 'Pizzas',
    rating: 4.6,
    image: calzoneImg,
    ingredients: ['Ricotta', 'Mozzarella', 'Jambon de dinde fumé', 'Sauce Tomate'],
    nutrition: { kcal: 920, prot: '42g', glucides: '105g' }
  },
  {
    id: 6,
    name: 'Lasagnes Maison',
    desc: 'Pâtes fraîches, ragoût de viande de bœuf, parmesan.',
    price: "1000",
    category: 'Pâtes',
    rating: 4.9,
    image: lasagneImg,
    ingredients: ['Pâtes Fraîches', 'Viande Hachée', 'Sauce Bolognaise', 'Béchamel', 'Parmesan'],
    nutrition: { kcal: 1150, prot: '55g', glucides: '95g' }
  },
  {
    id: 7,
    name: 'Pâtes Carbonara',
    desc: 'Linguine, guanciale (halal remplaçant), œufs, pecorino.',
    price: "900",
    category: 'Pâtes',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Linguine', 'Bacon de Bœuf', 'Jaunes d\'Œufs', 'Pecorino Romano'],
    nutrition: { kcal: 1050, prot: '38g', glucides: '120g' }
  },
  {
    id: 8,
    name: 'Tiramisu Classico',
    desc: 'Biscuits cuillère, mascarpone, café expresso, cacao amer.',
    price: "700",
    category: 'Desserts',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Mascarpone', 'Biscuits Cuillère', 'Café Expresso', 'Cacao en Poudre', 'Œufs'],
    nutrition: { kcal: 450, prot: '8g', glucides: '45g' }
  },
  {
    id: 9,
    name: 'Margherita (L / XL)',
    desc: 'La vraie classique avec sa touche de basilic frais.',
    price: "600 / 1000",
    category: 'Pizzas',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Olives', 'Basilic'],
    nutrition: { kcal: 800, prot: '30g', glucides: '110g' }
  },
  {
    id: 10,
    name: 'Margherita Joyeuse (L / XL)',
    desc: 'Pour les gourmands avec sa garniture de frites.',
    price: "700 / 1100",
    category: 'Pizzas',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce tomate', 'Mozzarella', 'Double fromage', 'Frites'],
    nutrition: { kcal: 1100, prot: '35g', glucides: '140g' }
  },
  {
    id: 11,
    name: 'Végétarienne (L / XL)',
    desc: 'Un festival de légumes frais parsemé d\'origan.',
    price: "800 / 1200",
    category: 'Pizzas',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Poivrons', 'Tomates', 'Oignons', 'Olives', 'Champignons frais', 'Origan'],
    nutrition: { kcal: 750, prot: '28g', glucides: '120g' }
  },
  {
    id: 12,
    name: 'Neapolitane (L / XL)',
    desc: 'Les saveurs de la mer subtilement associées à la mozzarella.',
    price: "800 / 1200",
    category: 'Pizzas',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Anchois ou thon', 'Olives'],
    nutrition: { kcal: 850, prot: '32g', glucides: '105g' }
  },
  {
    id: 13,
    name: 'Tonata (L / XL)',
    desc: 'Oignons et thon pour une pizza généreuse.',
    price: "800 / 1400",
    category: 'Pizzas',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Thon', 'Oignon'],
    nutrition: { kcal: 880, prot: '34g', glucides: '110g' }
  },
  {
    id: 14,
    name: 'Poularde (L / XL)',
    desc: 'Généreux poulet braisé ou crème, selon vos envies.',
    price: "900 / 1500",
    category: 'Pizzas',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Poulet crème ou poulet braisé', 'Oignons'],
    nutrition: { kcal: 920, prot: '40g', glucides: '105g' }
  },
  {
    id: 15,
    name: 'Orientale (L / XL)',
    desc: 'Merguez et viande hachée pour un voyage de saveurs.',
    price: "900 / 1600",
    category: 'Pizzas',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Merguez', 'Viandes hachées ou poulet', 'Oignon'],
    nutrition: { kcal: 1200, prot: '48g', glucides: '110g' }
  },
  {
    id: 16,
    name: 'Bolognaise (L / XL)',
    desc: 'La viande hachée sublimée par la sauce tomate.',
    price: "900 / 1600",
    category: 'Pizzas',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Viande de bœuf'],
    nutrition: { kcal: 1050, prot: '45g', glucides: '110g' }
  },
  {
    id: 17,
    name: 'Merguez (L / XL)',
    desc: 'Un classique piquant et généreux en merguez.',
    price: "1000 / 1700",
    category: 'Pizzas',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Merguez'],
    nutrition: { kcal: 1100, prot: '42g', glucides: '110g' }
  },
  {
    id: 18,
    name: 'Chicken Wings (L / XL)',
    desc: 'L\'originalité des ailerons de poulet sur votre pizza.',
    price: "1000 / 1700",
    category: 'Pizzas',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Ailerons de poulet'],
    nutrition: { kcal: 1150, prot: '45g', glucides: '105g' }
  },
  {
    id: 19,
    name: 'Campione (L / XL)',
    desc: 'L\'alliance parfaite bœuf haché et herbes aromatiques.',
    price: "1000 / 1600",
    category: 'Pizzas',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Viande de bœuf hachée', 'Champignons frais', 'Poivrons', 'Oignons', 'Olives', 'Herbes aromatiques'],
    nutrition: { kcal: 1200, prot: '55g', glucides: '105g' }
  },
  {
    id: 20,
    name: 'Fromagère (L / XL)',
    desc: 'Une sélection de 4 fromages pour un goût intense.',
    price: "1000 / 1700",
    category: 'Pizzas',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Bleu', 'Chèvre', 'Gruyère'],
    nutrition: { kcal: 1150, prot: '48g', glucides: '105g' }
  },
  {
    id: 21,
    name: 'Mexicaine (L / XL)',
    desc: 'Pour les amateurs de piquant et de saveurs relevées.',
    price: "1000 / 1700",
    category: 'Pizzas',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Viande hachée', 'Poivron', 'Piment', 'Thon ou poulet'],
    nutrition: { kcal: 1100, prot: '50g', glucides: '110g' }
  },
  {
    id: 22,
    name: 'Pecheur (L / XL)',
    desc: 'Savoureux mix de la mer.',
    price: "1200 / 1800",
    category: 'Pizzas',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', 'Thon', 'Anchois', 'Crevettes', 'Seiche'],
    nutrition: { kcal: 950, prot: '40g', glucides: '105g' }
  },
  {
    id: 23,
    name: '4 Saisons (L / XL)',
    desc: 'Un assortiment gourmand et coloré.',
    price: "1000 / 1600",
    category: 'Pizzas',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Sauce Tomate', 'Fromage', 'Mozzarella', '4 saisons'],
    nutrition: { kcal: 1000, prot: '42g', glucides: '115g' }
  },
  {
    id: 24,
    name: 'Saumon (Base Crème)',
    desc: 'Saumon fumé et crème fraîche, l\'équilibre parfait.',
    price: "1800 / 2600",
    category: 'Pizzas',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop',
    ingredients: ['Crème', 'Fromage', 'Mozzarella', 'Saumon fumé'],
    nutrition: { kcal: 950, prot: '42g', glucides: '90g' }
  },
  {
    id: 25,
    name: 'Fruits de Mer (Base Crème)',
    desc: 'Authentique pizza aux fruits de mer généreusement servie.',
    price: "1600 / 2200",
    category: 'Pizzas',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Crème', 'Fromage', 'Mozzarella', 'Mix de fruits de mer'],
    nutrition: { kcal: 900, prot: '45g', glucides: '95g' }
  },
  {
    id: 26,
    name: 'Poulet Champignon (Base Crème)',
    desc: 'Le réconfort du poulet rôti aux champignons.',
    price: "1000 / 1600",
    category: 'Pizzas',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Crème Fraîche', 'Fromage', 'Mozzarella', 'Poulet rôti', 'Champignons frais', 'Olives'],
    nutrition: { kcal: 1050, prot: '48g', glucides: '100g' }
  },
  {
    id: 27,
    name: '4 Fromages (Base Crème)',
    desc: 'Un mélange onctueux de fromages fondants.',
    price: "1100 / 1700",
    category: 'Pizzas',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop',
    ingredients: ['Crème fraîche', 'Fromage', 'Mozzarella', 'Bleu', 'Chèvre', 'Gruyère'],
    nutrition: { kcal: 1150, prot: '46g', glucides: '105g' }
  },
  {
    id: 28,
    name: 'Royal (Spécialité Pizzaiolo)',
    desc: 'Notre spécialité à la viande hachée et paleron.',
    price: "1400 / 1900",
    category: 'Pizzas',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Crème fraîche', 'Fromage', 'Mozzarella', 'Viande hachée', 'Paleron', 'Oignon', 'Persil'],
    nutrition: { kcal: 1250, prot: '56g', glucides: '110g' }
  },
  {
    id: 29,
    name: 'Poulet Pané (Base Crème)',
    desc: 'Craquante et moelleuse grâce au poulet pané.',
    price: "1000 / 1600",
    category: 'Pizzas',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=2000&auto=format&fit=crop',
    ingredients: ['Crème fraîche', 'Fromage', 'Mozzarella', 'Poulet pané', 'Tomate en dès'],
    nutrition: { kcal: 1100, prot: '40g', glucides: '120g' }
  },
  {
    id: 30,
    name: 'Galette Patator (Base Crème)',
    desc: 'Ultra gourmande avec ses pommes de terre.',
    price: "1000 / 1600",
    category: 'Pizzas',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2670&auto=format&fit=crop',
    ingredients: ['Crème fraîche', 'Fromage', 'Mozzarella', 'Pomme de terre', 'Viande hachée', 'Poulet', 'Sauce fromagère'],
    nutrition: { kcal: 1300, prot: '45g', glucides: '140g' }
  }
];

const categories = ['Tous', 'Pizzas', 'Pâtes', 'Desserts'];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<typeof menuItems[0] | null>(null);
  
  // Product state
  const [activeTab, setActiveTab] = useState<'ingredients' | 'nutrition'>('ingredients');

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const openProduct = (item: typeof menuItems[0]) => {
    setSelectedItem(item);
    setActiveTab('ingredients');
  };

  const closeProduct = () => {
    setSelectedItem(null);
  };

  const filteredItems = activeCategory === 'Tous' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase mb-3 block text-sm">Découvrez</span>
          <h2 className="text-4xl md:text-5xl font-serif text-cream font-bold mb-4">Notre Menu</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-base font-bold transition-all duration-300 shadow-sm ${
                activeCategory === cat 
                ? 'bg-primary text-dark shadow-md scale-105' 
                : 'bg-charcoal border border-gray-800 text-cream hover:bg-gray-800 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24 mt-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => openProduct(item)}
                className="bg-charcoal cursor-pointer rounded-[2.5rem] pt-24 px-6 pb-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,176,140,0.15)] transition-shadow duration-300 group flex flex-col relative border border-gray-800"
              >
                {/* Floating Image Top */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40">
                  <div className="w-full h-full rounded-full shadow-2xl overflow-hidden group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 bg-charcoal border-4 border-charcoal">
                     <ImageLoader
                       src={item.name.includes('Spéciale') ? "/pizza-speciale.jpg" : item.image}
                       fallbackSrc={item.image}
                       alt={item.name}
                       className="w-full h-full object-cover"
                     />
                  </div>
                </div>
                
                <button 
                  onClick={(e) => toggleFavorite(e, item.id)}
                  className="absolute top-6 right-6 p-2.5 bg-dark rounded-full shadow-sm hover:bg-gray-900 transition-colors border border-gray-800 z-10 hover:scale-110"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${
                      favorites.includes(item.id) ? 'fill-primary text-primary' : 'text-gray-400'
                    }`} 
                  />
                </button>
                
                <div className="flex flex-col flex-grow text-center">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-bold text-cream">{item.rating}</span>
                  </div>
                  <h3 className="font-bold text-xl text-cream leading-tight mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-gray-modern text-sm mb-6 flex-grow leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                     <span className="font-black text-2xl text-primary">{item.price} DA</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* --- Product Modal (Fiche Produit Interactive) --- */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-md bg-dark/80"
          >
            <div className="absolute inset-0" onClick={closeProduct} />
            
            <motion.div 
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-charcoal rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-800"
            >
              <button 
                onClick={closeProduct}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-dark/50 hover:bg-dark text-cream rounded-full flex items-center justify-center transition-colors border border-gray-800 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Product Image Panel */}
              <div className="md:w-1/2 relative bg-dark flex items-center justify-center p-8 overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
                <motion.div 
                  className="relative z-10 w-full max-w-[300px] md:max-w-none aspect-square rounded-full shadow-2xl overflow-hidden border-8 border-charcoal"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.7 }}
                >
                  <img 
                    src={selectedItem.name.includes('Spéciale') ? "/pizza-speciale.jpg" : selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Product Info Panel */}
              <div className="md:w-1/2 flex flex-col overflow-y-auto p-6 md:p-10 custom-scrollbar">
                <div className="flex items-center justify-between mb-2">
                   <div className="flex items-center gap-2">
                     <Star className="w-5 h-5 fill-primary text-primary" />
                     <span className="font-bold font-mono text-cream text-lg">{selectedItem.rating}</span>
                   </div>
                   <button 
                      onClick={(e) => toggleFavorite(e, selectedItem.id)}
                      className="p-2.5 bg-dark rounded-full hover:bg-gray-900 transition-colors border border-gray-800"
                    >
                      <Heart 
                        className={`w-6 h-6 transition-colors ${
                          favorites.includes(selectedItem.id) ? 'fill-primary text-primary' : 'text-gray-400'
                        }`} 
                      />
                    </button>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">{selectedItem.name}</h2>
                <p className="text-gray-modern text-base leading-relaxed mb-8">{selectedItem.desc}</p>

                {/* Tabs: Ingredients / Nutrition */}
                <div className="mb-8">
                   <div className="flex border-b border-gray-800 mb-4">
                     <button 
                       className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors ${
                         activeTab === 'ingredients' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-cream'
                       }`}
                       onClick={() => setActiveTab('ingredients')}
                     >
                       Ingrédients
                     </button>
                     <button 
                       className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors ${
                         activeTab === 'nutrition' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-cream'
                       }`}
                       onClick={() => setActiveTab('nutrition')}
                     >
                       Nutrition
                     </button>
                   </div>
                   
                   <div className="min-h-[80px]">
                     <AnimatePresence mode="wait">
                       {activeTab === 'ingredients' && (
                         <motion.div 
                           key="ingreds"
                           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                           className="flex flex-wrap gap-2"
                         >
                           {selectedItem.ingredients?.map(ing => (
                             <span key={ing} className="px-3 py-1.5 bg-dark text-cream text-xs rounded-full border border-gray-800 flex items-center gap-1.5">
                               <Leaf className="w-3 h-3 text-primary" /> {ing}
                             </span>
                           ))}
                         </motion.div>
                       )}
                       {activeTab === 'nutrition' && (
                         <motion.div 
                           key="nutri"
                           initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                           className="grid grid-cols-3 gap-4"
                         >
                           <div className="bg-dark p-3 rounded-xl border border-gray-800 text-center">
                             <div className="text-xl font-bold text-primary">{selectedItem.nutrition?.kcal}</div>
                             <div className="text-xs text-gray-modern uppercase tracking-wider">Kcal</div>
                           </div>
                           <div className="bg-dark p-3 rounded-xl border border-gray-800 text-center">
                             <div className="text-xl font-bold text-cream">{selectedItem.nutrition?.prot}</div>
                             <div className="text-xs text-gray-modern uppercase tracking-wider">Protéines</div>
                           </div>
                           <div className="bg-dark p-3 rounded-xl border border-gray-800 text-center">
                             <div className="text-xl font-bold text-cream">{selectedItem.nutrition?.glucides}</div>
                             <div className="text-xs text-gray-modern uppercase tracking-wider">Glucides</div>
                           </div>
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </div>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="font-black text-2xl md:text-3xl text-primary w-full sm:w-auto text-center sm:text-left">{selectedItem.price} DA</div>
                  <a href="#contact" onClick={closeProduct} className="w-full sm:flex-1 bg-primary text-dark py-4 px-6 rounded-full font-bold text-lg flex justify-center items-center gap-3 hover:bg-opacity-90 shadow-[0_5px_15px_rgba(212,176,140,0.3)] transition-all hover:-translate-y-1">
                    <Phone className="w-5 h-5" />
                    Commander
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}