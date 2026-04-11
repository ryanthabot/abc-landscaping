'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Truck, Clock, Award, ArrowRight } from 'lucide-react';
import { stats, heroImage } from '@/lib/data';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Floating organic blobs */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/10 animate-blob-morph opacity-60" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/10 animate-blob-morph-2 opacity-50" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 animate-blob-morph-4 opacity-40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <div className="max-w-xl">
            {/* Handwritten accent badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
              className="mb-6"
            >
              <span className="font-accent text-2xl text-primary inline-block">
                Serving Ontario Since Day One 🌿
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: 'spring', stiffness: 80 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-foreground mb-6 leading-[1.1]"
            >
              Your Outdoor Space,{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Reimagined</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full -z-0" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 80 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md"
            >
              Specializing in interlocking, retaining walls, and excavation. 
              We transform outdoor spaces across Bowmanville, Durham Region, and Toronto with craftsmanship you can count on.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 80 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold font-heading hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
              >
                Get Your Free Estimate
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full text-lg font-semibold font-heading hover:bg-secondary/80 transition-all border border-border"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Shield, label: 'Fully Insured' },
                { icon: Award, label: '25+ 5-Star Reviews' },
                { icon: Truck, label: 'Own Equipment' },
                { icon: Clock, label: 'On Time, Every Time' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Hero image + floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 70 }}
            className="relative hidden lg:block"
          >
            {/* Main hero image */}
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-primary/10">
                <Image
                  src={heroImage}
                  alt="Landscape Designs Ontario project showcase"
                  fill
                  className="object-cover"
                  priority
                  suppressHydrationWarning
                />
              </div>

              {/* Floating stat card 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-1/4 bg-background rounded-2xl shadow-lg border border-border p-4 min-w-[140px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <span className="text-lg">⭐</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">{stats[1].value}</p>
                    <p className="text-xs text-muted-foreground">{stats[1].label}</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 bottom-1/4 bg-background rounded-2xl shadow-lg border border-border p-4 min-w-[140px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-lg">🏗️</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-lg">{stats[0].value}</p>
                    <p className="text-xs text-muted-foreground">{stats[0].label}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
