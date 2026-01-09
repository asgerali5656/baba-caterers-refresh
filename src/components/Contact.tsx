import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { trackContactClick } from '@/lib/analytics';

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '9565655574',
    href: 'tel:9565655574',
    color: 'bg-green-500/10 text-green-500',
    type: 'phone' as const,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '9565655574',
    href: 'https://wa.me/919565655574?text=Hi%20BABA%20Caterers',
    color: 'bg-green-500/10 text-green-500',
    type: 'whatsapp' as const,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'shakircook21@gmail.com',
    href: 'mailto:shakircook21@gmail.com',
    color: 'bg-blue-500/10 text-blue-500',
    type: 'email' as const,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase">Get In Touch</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4">
            Humse Judein
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto px-4">
            Gujarat & Maharashtra mein 15 saalon se vishwasniya catering service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={() => trackContactClick(method.type, method.value)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl ${method.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold mb-1 sm:mb-2">{method.label}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm break-all">{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 text-muted-foreground text-sm sm:text-base"
        >
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          <span>Serving across Gujarat & Maharashtra</span>
        </motion.div>
      </div>
    </section>
  );
}
