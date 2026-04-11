'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { services, allServiceAreas } from '@/lib/data';

export default function QuoteCalculator() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-primary/5">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[4rem]" />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          >
            <span className="font-accent text-xl text-primary inline-block mb-3">
              Get in Touch 📋
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Ready for a <span className="text-primary">Free Estimate</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Tell us about your project and Jerome will get back to you within 24 hours with a free, no-obligation quote.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <a href="tel:7057721839" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call or Text</p>
                  <p className="font-heading font-semibold text-foreground">(705) 772-1839</p>
                </div>
              </a>

              <a href="mailto:landscapedesignsontario@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-heading font-semibold text-foreground text-sm">landscapedesignsontario@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service Area</p>
                  <p className="font-heading font-semibold text-foreground text-sm">Bowmanville, Durham Region &amp; GTA</p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['Fully Insured', 'Free Estimates', 'Owner On-Site'].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
          >
            <div className="bg-background rounded-3xl p-8 shadow-lg border border-primary/5">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="(705) 555-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service Needed</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Your Location</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    >
                      <option value="">Select your area...</option>
                      {allServiceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Tell Us About Your Project</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      placeholder="Describe your project — type of work, approximate size, timeline, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-semibold py-4 rounded-2xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    Send Request
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    We&apos;ll respond within 24 hours. No spam, ever.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                    Request Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Jerome will be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-heading font-semibold text-sm hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
