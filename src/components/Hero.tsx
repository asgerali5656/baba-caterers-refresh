import { motion } from 'framer-motion';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { trackButtonClick, trackContactClick } from '@/lib/analytics';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Wedding Catering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Decorative Elements - Hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-glow-pulse" />
      <div className="hidden sm:block absolute bottom-40 right-20 w-48 h-48 border border-primary/10 rounded-full animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-primary font-medium tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm uppercase mb-4 sm:mb-6">
            15 Years of Excellence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
        >
          <span className="block">Har Shaadi Ko</span>
          <span className="text-gradient-gold">Khaas Banayein</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 sm:mb-10 font-light px-4"
        >
          Shaahi Swad. Dilkash Service. Har Mehmaan Ka Dil Jeet Lein.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <a
            href="tel:9565655574"
            onClick={() => {
              trackButtonClick('Call Now', 'Hero');
              trackContactClick('phone', '9565655574');
            }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
            Call Now
          </a>
          <a
            href="https://wa.me/919565655574?text=Hi%20BABA%20Caterers,%20I%20want%20to%20book%20wedding%20catering"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackButtonClick('WhatsApp', 'Hero');
              trackContactClick('whatsapp', '919565655574');
            }}
            className="group w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            WhatsApp
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={() => trackButtonClick('Scroll', 'Hero')}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-foreground/50 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-[10px] sm:text-xs tracking-widest uppercase mb-1 sm:mb-2">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
