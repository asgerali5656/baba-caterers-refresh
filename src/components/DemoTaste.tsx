import { motion } from 'framer-motion';
import { Sparkles, MessageCircle } from 'lucide-react';
import { trackButtonClick, trackContactClick } from '@/lib/analytics';

export default function DemoTaste() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/80 to-burgundy-deep" />
      
      {/* Decorative Elements - Hidden on small mobile */}
      <div className="hidden sm:block absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-32 h-32 border border-primary/10 rounded-full" />
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
      <div className="hidden sm:block absolute top-1/3 right-1/3 w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 bg-primary/20 rounded-full flex items-center justify-center"
          >
            <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
          </motion.div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Demo Taste <span className="text-gradient-gold">Available</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 sm:mb-10 max-w-xl mx-auto px-4">
            Final booking se pehle, har dish ka mazaa lo. Apni pasand khud check karo!
          </p>

          <motion.a
            href="https://wa.me/919565655574?text=Hi,%20I%20want%20to%20schedule%20a%20demo%20taste"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              trackButtonClick('Book Demo Taste', 'DemoTaste');
              trackContactClick('whatsapp', '919565655574');
            }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            Book Demo Taste
          </motion.a>

          <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
            * Available in Gujarat & Maharashtra regions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
