import { motion } from 'framer-motion';
import { UtensilsCrossed, Flame, Users, Sparkles } from 'lucide-react';

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Wedding Catering',
    description: 'Shaadi ko yaadgaar banane ka jimma humara. Complete wedding menu solutions.',
  },
  {
    icon: Flame,
    title: 'Live Counters',
    description: 'Mehmaan ki aankhon ke saamne banta taaza khana. Dosa, chaat, kebabs & more.',
  },
  {
    icon: Users,
    title: 'Professional Service',
    description: 'Well-trained waiters ensuring your guests feel like royalty throughout.',
  },
  {
    icon: Sparkles,
    title: 'Custom Menus',
    description: 'Aapki pasand ke hisaab se menu customization. Veg, Non-veg, Jain options.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase">Our Services</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4">
            Khaas Services
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto px-4">
            Har zaroorat ka khayal. Complete catering solutions for your special day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-display text-sm sm:text-xl font-semibold mb-1 sm:mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
