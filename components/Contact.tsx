'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { businessInfo, serviceAreas } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact-info" className="relative py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          className="text-center mb-16"
        >
          <span className="font-accent text-xl text-primary inline-block mb-3">
            Reach Out 📞
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Let&apos;s Build Something <span className="text-primary">Great</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Serving the Durham Region and GTA with pride. Contact Jerome directly for a free estimate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {/* Phone */}
          <motion.a
            href={`tel:${businessInfo.phone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
              <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-1">Call or Text</h3>
            <p className="text-primary font-semibold">(705) 772-1839</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${businessInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
              <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
            <p className="text-primary font-semibold text-sm break-all">{businessInfo.email}</p>
          </motion.a>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-1">Hours</h3>
            <p className="text-muted-foreground text-sm">Mon–Sat: 8am–6pm</p>
            <p className="text-muted-foreground text-sm">Sun: Closed</p>
          </motion.div>
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto bg-background rounded-3xl p-8 shadow-sm border border-primary/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-bold text-xl text-foreground">Service Areas</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="font-heading font-semibold text-primary mb-2">Bowmanville</p>
              <p className="text-muted-foreground text-sm">{serviceAreas.bowmanville.join(', ')}</p>
            </div>
            <div>
              <p className="font-heading font-semibold text-primary mb-2">Durham Region</p>
              <p className="text-muted-foreground text-sm">{serviceAreas.durham.join(', ')}</p>
            </div>
            <div>
              <p className="font-heading font-semibold text-primary mb-2">Toronto &amp; GTA</p>
              <p className="text-muted-foreground text-sm">{serviceAreas.toronto.join(', ')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
