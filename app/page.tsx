'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import ServicesGrid from '@/components/ServicesGrid';
import Reviews from '@/components/Reviews';
import QuoteCalculator from '@/components/QuoteCalculator';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Gallery />
        <ServicesGrid />
        <Reviews />
        <QuoteCalculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
