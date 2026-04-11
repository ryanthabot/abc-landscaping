'use client';

import { motion } from 'framer-motion';
import { ClipboardList, PencilRuler, HardHat, PartyPopper } from 'lucide-react';
import { processSteps } from '@/lib/data';

const stepIcons = [ClipboardList, PencilRuler, HardHat, PartyPopper];

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-primary/5">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 animate-gentle-float" />
      <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-accent/10 animate-gentle-float" style={{ animationDelay: '2s' }} />

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
            How We Work 🛠️
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            From Vision to <span className="text-primary">Reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A straightforward process built on communication, transparency, and quality work.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 80 }}
                className="relative group"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary/20" />
                )}

                <div className="bg-background rounded-3xl p-8 text-center shadow-sm border border-primary/5 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  {/* Step number */}
                  <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">
                    Step {i + 1}
                  </span>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto my-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Ready to get started? Let&apos;s talk about your project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-8 py-4 rounded-2xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Your Free Estimate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
