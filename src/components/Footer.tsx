import { Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="BABA Caterers" className="h-16 w-auto mb-4" />
          <h3 className="font-display text-2xl font-bold text-primary mb-2">BABA Caterers</h3>
          <p className="text-muted-foreground text-sm mb-6">
            15 Saalon Se Har Shaadi Ko Bana Rahe Hain Khaas
          </p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for every wedding celebration</span>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            © {new Date().getFullYear()} BABA Caterers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
