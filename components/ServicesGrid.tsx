'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';
import { services } from '@/lib/data';

export default function ServicesGrid() {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const expanded = services.find(s => s.id === expandedService);

  return (
    <section id="services" className="relative py-24 bg-primary/5">
      {/* Background shape */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-primary/5 rounded-tr-[4rem]" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          className="text-center mb-16"
        >
          <span className="font-accent text-xl text-primary inline-block mb-3">
            What We Do 🏗️
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Specialized in three core areas — we do each one exceptionally well.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 80 }}
              className="group"
            >
              <div className="bg-background rounded-3xl overflow-hidden shadow-sm border border-primary/5 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {service.tagline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <button
                    onClick={() => setExpandedService(service.id)}
                    className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Service Modal */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setExpandedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-64">
              <Image
                src={expanded.image}
                alt={expanded.title}
                fill
                className="object-cover rounded-t-3xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <button
                onClick={() => setExpandedService(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                {expanded.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">{expanded.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {expanded.description}
              </p>

              <h4 className="font-heading font-semibold text-foreground mb-3">What&apos;s Included:</h4>
              <ul className="space-y-2 mb-8">
                {expanded.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setExpandedService(null)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-6 py-3 rounded-2xl hover:bg-primary/90 transition-colors"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
