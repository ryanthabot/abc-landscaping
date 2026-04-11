'use client';

import { businessInfo, services, allServiceAreas } from '@/lib/data';

export default function JsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: businessInfo.name,
    description: 'Expert interlocking, retaining walls, and excavation services in Bowmanville, Durham Region, and the GTA.',
    image: '/images/gallery_image_16.jpg',
    telephone: businessInfo.phone,
    email: businessInfo.email,
    url: 'https://landscapedesignsontario.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bowmanville',
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.9125,
      longitude: -78.6875,
    },
    areaServed: allServiceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    sameAs: [],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '25',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Landscaping Services',
      itemListElement: services.map((service, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
        position: i + 1,
      })),
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: businessInfo.name,
    url: 'https://landscapedesignsontario.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://landscapedesignsontario.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
