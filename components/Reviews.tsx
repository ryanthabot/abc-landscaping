'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, ImageIcon } from 'lucide-react';
import { reviews } from '@/lib/data';

export default function Reviews() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [lightboxName, setLightboxName] = useState('');

  const openLightbox = (src: string, name: string) => {
    setLightboxSrc(src);
    setLightboxName(name);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section id="reviews" className="relative py-24">
      {/* Decorative elements */}
      <div className="absolute top-20 left-5 w-24 h-24 rounded-full bg-primary/5 animate-gentle-float" />
      <div className="absolute bottom-20 right-5 w-20 h-20 rounded-full bg-accent/5 animate-gentle-float-delayed" />

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
              className="bg-background rounded-3xl p-8 shadow-sm border border-primary/5 hover:shadow-lg hover:border-primary/10 transition-all duration-300 flex flex-col"
            >
              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-heading font-bold text-sm">
                    {review.clientName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{review.clientName}</p>
                  <p className="text-xs text-muted-foreground">{review.clientCity}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-1">
                &ldquo;{review.body}&rdquo;
              </p>

              {/* View Image Button */}
              {review.image && (
                <button
                  onClick={() => openLightbox(review.image!, review.clientName)}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline transition-colors self-start cursor-pointer"
                >
                  <ImageIcon className="w-4 h-4" />
                  View Image
                </button>
              )}
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
            href="https://www.google.com/search?sca_esv=a8a2e81bb91c1c6f&sxsrf=ANbL-n6YCmCnIRsK3ihiniALJj16thiKCQ:1775934297755&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOW47iR6vWc7jz24jbuZMjKM9s2QfKbofCRCwXopJvNt4OtjsDuxyRbqf0C1GfM6RezfXbBLUdYe6HGGqMUs2OchCiO_NJ7cL3GepmrpZkfiAptecFg%3D%3D&q=Landscape+Designs+Ontario+Reviews&sa=X&ved=2ahUKEwiT-9jnvuaTAxWSiCsGHXV-CWAQ0bkNegQIORAH&biw=2296&bih=1164&dpr=1.25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary/20 text-primary font-heading font-semibold px-6 py-3 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Star className="w-4 h-4 fill-current" />
            Read Google Reviews
          </a>
        </motion.div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-background rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
                aria-label="Close image"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={lightboxSrc}
                  alt={`Review from ${lightboxName}`}
                  fill
                  className="object-contain"
                  suppressHydrationWarning
                />
              </div>

              {/* Caption */}
              <div className="px-4 py-3 text-center">
                <p className="text-sm text-muted-foreground">
                  Google Review — <span className="font-semibold text-foreground">{lightboxName}</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
