import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';
import { trackButtonClick, trackContactClick } from '@/lib/analytics';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Chef', href: '#chef' },
  { name: 'Menu', href: '#menu' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="BABA Caterers" className="h-10 sm:h-12 w-auto" />
            <span className="font-display text-lg sm:text-xl text-primary hidden xs:block">BABA Caterers</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => trackButtonClick(link.name, 'Navbar')}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:9565655574"
              onClick={() => {
                trackButtonClick('Call Now', 'Navbar');
                trackContactClick('phone', '9565655574');
              }}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-medium text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsMobileOpen(false);
                    trackButtonClick(link.name, 'Navbar Mobile');
                  }}
                  className="text-foreground/80 hover:text-primary transition-colors py-3 font-medium text-base border-b border-border/50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:9565655574"
                onClick={() => {
                  trackButtonClick('Call Now', 'Navbar Mobile');
                  trackContactClick('phone', '9565655574');
                }}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-medium mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
