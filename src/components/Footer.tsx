import { Heart, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';
import logo from '@/assets/logo.png';
import { trackContactClick, trackExternalLink } from '@/lib/analytics';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <img src={logo} alt="BABA Caterers" className="h-12 sm:h-16 w-auto mb-3 sm:mb-4 mx-auto sm:mx-0" />
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-2">BABA Caterers</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              15 Saalon Se Har Shaadi Ko Bana Rahe Hain Khaas
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="font-display text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="tel:9565655574" 
                onClick={() => trackContactClick('phone', '9565655574')}
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors justify-center sm:justify-start text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>9565655574</span>
              </a>
              <a 
                href="mailto:shakircook21@gmail.com" 
                onClick={() => trackContactClick('email', 'shakircook21@gmail.com')}
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors justify-center sm:justify-start text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">shakircook21@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground justify-center sm:justify-start text-sm sm:text-base">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Gujarat & Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Social Links & Quick Links */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="font-display text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Follow Us</h4>
            <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start mb-3 sm:mb-4">
              <a
                href="https://www.instagram.com/baba4caterers/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackExternalLink('https://www.instagram.com/baba4caterers/', 'Instagram')}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1Be9pcq7Kh/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackExternalLink('https://www.facebook.com/share/1Be9pcq7Kh/', 'Facebook')}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/919565655574?text=Hi%20BABA%20Caterers,%20I%20want%20to%20enquire%20about%20catering"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick('whatsapp', '919565655574')}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <a
              href="https://babacaterersmenu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackExternalLink('https://babacaterersmenu.vercel.app/', 'Complete Menu')}
              className="inline-flex items-center gap-2 text-primary hover:underline text-xs sm:text-sm"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              View Complete Menu
            </a>
          </div>
        </div>

        {/* Developer Credit & Copyright */}
        <div className="border-t border-border pt-4 sm:pt-6">
          <div className="flex flex-col items-center text-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap justify-center">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-current" />
              <span>by</span>
              <a
                href="https://www.instagram.com/asgerali5656/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackExternalLink('https://www.instagram.com/asgerali5656/', 'Developer')}
                className="text-primary font-medium hover:underline"
              >
                Asger Ali
              </a>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              © {new Date().getFullYear()} BABA Caterers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
