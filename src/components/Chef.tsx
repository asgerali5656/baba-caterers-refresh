import { motion } from 'framer-motion';
import { Award, Clock, Heart } from 'lucide-react';
import chefImage from '@/assets/chef.jpg';

const stats = [
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: Award, value: '500+', label: 'Events Catered' },
  { icon: Heart, value: '100%', label: 'Client Satisfaction' },
];

export default function Chef() {
  return (
    <section id="chef" className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-3xl" />
              <div className="absolute -inset-8 border border-primary/10 rounded-3xl" />
              
              <img
                src={chefImage}
                alt="Chef Shakir Shaikh"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-xl"
              >
                <span className="font-display text-2xl font-bold">15+</span>
                <span className="block text-sm opacity-80">Years</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase">Master Chef</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Chef Shakir Shaikh
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              15+ saal ka tajurba, har dish mein pyaar aur perfection. Chef Shakir ke haathon ka swad har bite mein mehsoos hota hai.
            </p>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              Unki har recipe mein tradition aur innovation ka sangam. Shaadi ki sabse badi jimmedaari — khana — hum sambhalte hain.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center p-4 bg-card rounded-xl border border-border"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
