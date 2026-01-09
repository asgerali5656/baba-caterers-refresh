import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Chef from '@/components/Chef';
import Menu from '@/components/Menu';
import DemoTaste from '@/components/DemoTaste';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Chef />
      <Menu />
      <DemoTaste />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
