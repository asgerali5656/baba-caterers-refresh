import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import buffetImage from '@/assets/dish-buffet.jpg';
import kebabsImage from '@/assets/dish-kebabs.jpg';
import spreadImage from '@/assets/dish-spread.jpg';
import jafraniRollImage from '@/assets/dish-jafrani-roll.jpg';
import mavaRollImage from '@/assets/dish-mava-roll.jpg';
import modernRollImage from '@/assets/dish-modern-roll.jpg';
import maharajaRollImage from '@/assets/dish-maharaja-roll.jpg';
import juicesImage from '@/assets/dish-juices.jpg';
import { trackButtonClick, trackImageClick, trackExternalLink } from '@/lib/analytics';

const dishes = [
  {
    name: 'Jafrani Roll',
    description: 'Mutton seekh wrapped in roomali roti, shaahi swad',
    image: jafraniRollImage,
  },
  {
    name: 'Mava Roll',
    description: 'Sweet mawa delight with nuts and saffron',
    image: mavaRollImage,
  },
  {
    name: 'Modern Roll',
    description: 'Fusion chicken tikka roll with cheese',
    image: modernRollImage,
  },
  {
    name: 'Maharaja Roll',
    description: 'Royal lamb seekh wrapped in naan, creamy sauce',
    image: maharajaRollImage,
  },
  {
    name: 'Non-Veg Buffet Spread',
    description: 'Tandoori chicken, seekh kebabs, chicken tikka aur bahut kuch',
    image: buffetImage,
  },
  {
    name: 'Starters Collection',
    description: 'Seekh kebab, chicken tikka, roomali rolls ka collection',
    image: kebabsImage,
  },
  {
    name: 'Grand Catering Setup',
    description: 'Wedding style buffet presentation with live counters',
    image: spreadImage,
  },
  {
    name: 'Fresh Juices & Mocktails',
    description: '100% natural, refreshing drinks for every guest',
    image: juicesImage,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase">Our Specialties</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4">
            Shaadi Ke Superstar Dishes
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto px-4">
            Har bite mein mohabbat ka zaika
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => trackImageClick(dish.name, 'Menu')}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6">
                <h3 className="font-display text-sm sm:text-lg font-semibold mb-0.5 sm:mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {dish.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://babacaterersmenu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackButtonClick('View Complete Menu', 'Menu');
              trackExternalLink('https://babacaterersmenu.vercel.app/', 'Complete Menu');
            }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Complete Menu
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
