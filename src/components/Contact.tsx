import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '9565655574',
    href: 'tel:9565655574',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '9565655574',
    href: 'https://wa.me/919565655574?text=Hi%20BABA%20Caterers',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'shakircook21@gmail.com',
    href: 'mailto:shakircook21@gmail.com',
    color: 'bg-blue-500/10 text-blue-500',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase">Get In Touch</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Humse Judein
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Gujarat & Maharashtra mein 15 saalon se vishwasniya catering service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl ${method.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{method.label}</h3>
              <p className="text-muted-foreground text-sm">{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mt-12 text-muted-foreground"
        >
          <MapPin className="w-5 h-5 text-primary" />
          <span>Serving across Gujarat & Maharashtra</span>
        </motion.div>
      </div>
    </section>
  );
}
