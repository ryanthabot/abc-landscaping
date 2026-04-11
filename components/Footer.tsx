'use client';

import { Phone, Mail, MapPin, TreePine } from 'lucide-react';
import { businessInfo, services, serviceAreas } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/3 border-t border-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">LDO</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <p className="font-heading font-bold text-foreground leading-tight">Landscape Designs</p>
                <p className="font-accent text-sm text-muted-foreground">Ontario</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Transforming outdoor spaces across the Durham Region and GTA with expert interlocking, retaining walls, and excavation.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TreePine className="w-4 h-4 text-primary" />
              <span>Owner-operated by Jerome</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  Free Estimate →
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li className="text-sm font-medium text-primary">Bowmanville</li>
              {serviceAreas.durham.slice(0, 4).map((area) => (
                <li key={area} className="text-muted-foreground text-sm">{area}</li>
              ))}
              <li className="text-muted-foreground text-sm">...and more</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  (705) 772-1839
                </a>
              </li>
              <li>
                <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  landscapedesignsontario@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Serving Durham Region &amp; GTA, Ontario</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary/5">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Landscape Designs Ontario. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#portfolio" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#faq" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
