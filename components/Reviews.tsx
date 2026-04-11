'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { reviews } from '@/lib/data';

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 w-24 h-24 rounded-full bg-primary/5 animate-gentle-float" />
      <div className="absolute bottom-20 right-5 w-20 h-20 rounded-full bg-accent/5 animate-gentle-float" style={{ animationDelay: '3s' }} />

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
            Client Love 💬
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it — hear from homeowners across the Durham Region and GTA.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 80 }}
              className="bg-background rounded-3xl p-8 shadow-sm border border-primary/5 hover:shadow-lg hover:border-primary/10 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/10 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                &ldquo;{review.body}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-heading font-bold text-sm">
                    {review.clientName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{review.clientName}</p>
                  <p className="text-xs text-muted-foreground">{review.clientCity}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4 text-sm">
            See all our reviews on Google
          </p>
          <a
            href="https://www.google.com/maps/place/Landscape+Designs+Ontario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary/20 text-primary font-heading font-semibold px-6 py-3 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Star className="w-4 h-4 fill-current" />
            Read Google Reviews
          </a>
        </motion.div>
      </div>
    </section>
  );
}
