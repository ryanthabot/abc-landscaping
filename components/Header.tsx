'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { navLinks, businessInfo } from '@/lib/data';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Phone className="w-3.5 h-3.5" />
          <span>Call Jerome: </span>
          <a href={businessInfo.phoneHref} className="font-semibold underline underline-offset-2 hover:no-underline">
            {businessInfo.phoneFormatted}
          </a>
          <span className="hidden sm:inline mx-2">&bull;</span>
          <span className="hidden sm:inline">Serving Bowmanville, Durham &amp; Toronto</span>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-background'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#top"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-primary-foreground font-bold text-lg font-heading">LDO</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground block leading-tight">
                Landscape Designs
              </span>
              <span className="text-xs text-muted-foreground font-accent">Ontario</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, type: 'spring', stiffness: 100 }}
            className="hidden lg:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Right side actions */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Sun className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-heading"
            >
              Free Estimate
            </a>
            <button
              className="lg:hidden w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 25 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile menu header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">LDO</span>
                    </div>
                    <div>
                      <span className="font-heading font-bold text-foreground block">Landscape Designs</span>
                      <span className="text-xs text-muted-foreground font-accent">Ontario</span>
                    </div>
                  </div>
                  <button
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>

              {/* Mobile nav links */}
              <nav className="p-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className={`block px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                      activeSection === link.href.replace('#', '')
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-border">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-primary/5 text-primary font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {businessInfo.phoneFormatted}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
