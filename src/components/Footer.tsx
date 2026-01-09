import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Youtube, ExternalLink } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img src={logo} alt="BABA Caterers" className="h-16 w-auto mb-4 mx-auto md:mx-0" />
            <h3 className="font-display text-2xl font-bold text-primary mb-2">BABA Caterers</h3>
            <p className="text-muted-foreground text-sm">
              15 Saalon Se Har Shaadi Ko Bana Rahe Hain Khaas
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:9565655574" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <span>9565655574</span>
              </a>
              <a href="mailto:shakircook21@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                <span>shakircook21@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span>Gujarat & Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Social Links & Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Follow Us</h4>
            <div className="flex items-center gap-4 justify-center md:justify-start mb-4">
              <a
                href="https://www.instagram.com/babacaterers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/babacaterers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@babacaterers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://babacaterersmenu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              View Complete Menu
            </a>
          </div>
        </div>

        {/* Developer Credit & Copyright */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by</span>
              <a
                href="https://asgerali.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Asger Ali
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} BABA Caterers. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
