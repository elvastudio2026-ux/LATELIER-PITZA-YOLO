import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Quelles sont vos zones de livraison ?",
    answer: "Nous livrons gratuitement à Dély Ibrahim, Chéraga, et Ben Aknoun. Pour les autres communes environnantes, veuillez nous contacter pour vérifier la disponibilité."
  },
  {
    question: "Avez-vous des options pour les allergies alimentaires ?",
    answer: "Oui, nous proposons des pâtes sans gluten sur demande (avec un supplément de temps de préparation). Veuillez préciser toutes vos allergies lors de votre commande, notre équipe prendra les précautions nécessaires."
  },
  {
    question: "Combien de temps faut-il pour préparer une pizza ?",
    answer: "En moyenne, nos pizzas sont prêtes en 15 à 20 minutes car elles sont cuites rapidement dans notre four traditionnel. Le temps peut varier en cas de forte affluence."
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les paiements à la livraison en espèces. Le paiement par carte sera bientôt disponible."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-cream relative" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase mb-3 block text-sm">Informations</span>
          <h2 className="text-4xl md:text-5xl font-serif text-dark font-bold mb-6">Questions Fréquentes</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-dark text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-primary transition-transform duration-300 shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
