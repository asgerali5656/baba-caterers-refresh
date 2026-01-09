import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import seekhImage from '@/assets/dish-seekh.jpg';
import biryaniImage from '@/assets/dish-biryani.jpg';
import butterChickenImage from '@/assets/dish-butter-chicken.jpg';
import paneerImage from '@/assets/dish-paneer.jpg';

const dishes = [
  {
    name: 'Mutton Seekh Kebab',
    description: 'Asli shaahi swad, dhuan aur masalon ka perfect milan',
    image: seekhImage,
  },
  {
    name: 'Lucknowi Biryani',
    description: 'Kesar ki khushbu, dum pukht ka jaadu',
    image: biryaniImage,
  },
  {
    name: 'Butter Chicken',
    description: 'Creamy, rich, ghar jaisa pyaar',
    image: butterChickenImage,
  },
  {
    name: 'Paneer Tikka',
    description: 'Tandoori perfection, vegetarian delight',
    image: paneerImage,
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase">Our Specialties</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Shaadi Ke Superstar Dishes
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Har bite mein mohabbat ka zaika
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="text-sm text-muted-foreground">
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
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Complete Menu
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
