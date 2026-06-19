import { motion } from 'motion/react';
import { Store, ShoppingBag, Truck } from 'lucide-react';

const services = [
  {
    icon: Store,
    title: 'Repas sur place',
    desc: 'Profitez d\'un cadre chaleureux et d\'un service aux petits soins dans notre restaurant.'
  },
  {
    icon: ShoppingBag,
    title: 'Vente à emporter',
    desc: 'Commandez et venez récupérer vos pizzas toutes chaudes, prêtes à être savourées.'
  },
  {
    icon: Truck,
    title: 'Livraison express',
    desc: 'Recevez votre commande directement chez vous, chaude et dans les meilleurs délais.'
  }
];

export function Services() {
  return (
    <section className="py-24 bg-dark border-t border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              key={index}
              className="group text-center"
            >
              <div className="w-20 h-20 mx-auto bg-charcoal rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-gray-800">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">{service.title}</h3>
              <p className="text-gray-modern leading-relaxed max-w-sm mx-auto">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
