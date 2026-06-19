import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase mb-3 block text-sm">Rendez-nous visite</span>
          <h2 className="text-4xl md:text-5xl font-serif text-cream font-bold mb-6">Contact & Accès</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-charcoal rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
          
          {/* Info Side */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-serif font-bold text-cream mb-8">Informations</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center shrink-0 border border-gray-800">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-cream text-lg mb-1">Adresse</h4>
                  <p className="text-gray-modern text-lg">140 Hay El Bina<br />Dély Ibrahim, Alger</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center shrink-0 border border-gray-800">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-cream text-lg mb-1">Réservation & Livraison</h4>
                  <p className="text-primary text-lg font-bold">0541 65 12 80</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center shrink-0 border border-gray-800">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-cream text-lg mb-1">Horaires d'ouverture</h4>
                  <p className="text-gray-modern text-lg">Ouvert tous les jours<br />10h00 - 00h00</p>
                </div>
              </div>
            </div>
            
            <button className="mt-12 w-full py-4 bg-primary text-dark font-bold rounded-xl hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-[0_4px_20px_rgba(212,176,140,0.3)] transform hover:-translate-y-1">
              Appeler pour commander
            </button>
          </div>

          {/* Map Side (Embed Google Maps iframe) */}
          <div className="h-96 lg:h-auto min-h-[400px] w-full relative bg-dark">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12793.843797619213!2d2.9806456088267272!3d36.75135111957262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fafb5963ecb4d%3A0xe5a1b023fbe2571c!2zRMOpbHkgSWJyYWhpbSwgQWxnZXJpYQ!5e0!3m2!1sen!2sfr!4v1711124614488!5m2!1sen!2sfr" 
              className="absolute inset-0 w-full h-full border-0 grayscale-[80%] invert-[90%] contrast-125 opacity-70 hover:opacity-90 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps L'Atelier du Pizzaiolo"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
