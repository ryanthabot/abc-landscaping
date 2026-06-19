'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TreePine, Award, Users, Wrench } from 'lucide-react';
import { aboutImage } from '@/lib/data';

export default function About() {
  const values = [
    {
      icon: TreePine,
      title: 'Local Expertise',
      description: 'Deep knowledge of Durham Region soil, drainage, and seasonal conditions.',
    },
    {
      icon: Award,
      title: 'Quality Materials',
      description: 'Premium stone and materials sourced from trusted local suppliers.',
    },
    {
      icon: Users,
      title: 'Owner-Operated',
      description: 'Kevin & Cory are on-site for every project, ensuring top-notch results.',
    },
    {
      icon: Wrench,
      title: 'Own Equipment',
      description: 'We own all our equipment — no subcontractors, no delays.',
    },
  ];

  return (
    <section id="mission" className="relative py-24 overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[4rem]" />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[5/4] border border-primary/10">
                <Image
                  src={aboutImage}
                  alt="Kevin - A Better Choice Landscaping owner and operator"
                  fill
                  className="object-cover"
                  suppressHydrationWarning
                />
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-[2rem] border-2 border-primary/10 -z-10" />

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 150 }}
                className="absolute -bottom-6 -left-4 bg-primary text-primary-foreground rounded-2xl p-5 shadow-lg"
              >
                <p className="font-heading font-bold text-3xl text-center">10+</p>
                <p className="text-sm font-medium opacity-90">Years of<br />experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Story side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          >
            {/* Handwritten accent */}
            <span className="font-accent text-xl text-primary inline-block mb-3">
              Our Story 🌿
            </span>

            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Built on{' '}
              <span className="text-primary">Hard Work</span> &amp; Honest Craft
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Hi, I am Kevin — owner and operator of A Better Choice Landscaping.
              My partner Cory and I, after working for many companies and seeing their pricing and their standards,
              decided to create our own with better, more honest pricing. We believe
              every property deserves outdoor spaces that are as functional as they are
              beautiful — without the inflated price tag.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              With years of experience in interlocking, retaining walls,
              and excavation, we take personal pride in every project we take on.
              When you hire us, you get us — on-site, hands-on, from start to finish.
              No subcontractors, no runaround. Just honest craftsmanship, fair pricing,
              and results that speak for themselves.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-2xl hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">{value.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
