// ============================================================================
// SITE DATA — Landscape Designs Ontario
// ============================================================================

// Service areas
export const serviceAreas = {
  bowmanville: ['Bowmanville'],
  durham: ['Courtice', 'Oshawa', 'Whitby', 'Brooklin', 'Port Perry', 'Ajax', 'Pickering'],
  toronto: ['Old Toronto', 'Scarborough', 'East York', 'York', 'North York', 'Etobicoke'],
};

export const allServiceAreas = [
  ...serviceAreas.bowmanville,
  ...serviceAreas.durham,
  ...serviceAreas.toronto,
];

// Navigation links
export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#mission' },
  { label: 'Process', href: '#process' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

// Core services
export const services = [
  {
    id: 'interlocking',
    title: 'Interlocking',
    tagline: 'Built to Impress',
    description:
      'Custom interlocking stone driveways, walkways, and patios that transform your outdoor space into something extraordinary. Built to last through every Ontario season.',
    icon: '🧱',
    image: '/images/gallery_image_1.jpg',
    items: [
      'Custom driveway design and installation',
      'Interlocking stone walkways and pathways',
      'Patios and outdoor living areas',
      'Pool deck and surround paving',
      'Steps and stoops with stone detailing',
      'Edging and border installations',
      'Permeable paving solutions',
      'Pattern and colour customization',
    ],
  },
  {
    id: 'retaining-walls',
    title: 'Retaining Walls',
    tagline: 'Strength & Style',
    description:
      'Structural and decorative retaining walls that protect your property while adding beauty and value. Engineered for durability and designed to complement your landscape.',
    icon: '🏗️',
    image: '/images/gallery_image_2.jpg',
    items: [
      'Structural retaining wall engineering',
      'Decorative garden and tiered walls',
      'Natural stone wall construction',
      'Concrete block wall systems',
      'Slope stabilization and erosion control',
      'Terraced landscaping solutions',
      'Drainage integration behind walls',
      'Seating walls and landscape borders',
    ],
  },
  {
    id: 'excavation',
    title: 'Excavation',
    tagline: 'Ground Up Precision',
    description:
      'Professional excavation services for residential and commercial projects. From site preparation to grading, we handle the heavy work so your project starts right.',
    icon: '🚜',
    image: '/images/gallery_image_3.jpg',
    items: [
      'Site preparation and clearing',
      'Foundation and basement excavation',
      'Grading and land levelling',
      'Trenching for utilities and drainage',
      'Pool excavation and shaping',
      'Driveway and road base preparation',
      'Soil removal and redistribution',
      'Backfilling and compaction',
    ],
  },
];

// What is included with every service
export const includedServices = [
  'Free on-site consultation and estimate',
  'Professional project management',
  'High-quality materials sourced locally',
  'Clean worksite maintained daily',
  'Final walkthrough and inspection',
  'Satisfaction guarantee on all work',
];

// Process steps
export const processSteps = [
  {
    step: 1,
    title: 'Free Consultation',
    description:
      'Jerome visits your property to discuss your vision, assess the space, and understand exactly what you need. No obligation, no pressure.',
    icon: '📞',
  },
  {
    step: 2,
    title: 'Custom Design',
    description:
      'We create a detailed plan tailored to your property, your style, and your budget. You see exactly what you are getting before we start.',
    icon: '📐',
  },
  {
    step: 3,
    title: 'Expert Build',
    description:
      'Our experienced crew arrives on schedule and transforms your outdoor space with precision craftsmanship and quality materials.',
    icon: '🔨',
  },
  {
    step: 4,
    title: 'Enjoy Your Space',
    description:
      'Walk out to a beautifully finished project built to last. We do a final walkthrough together to make sure you love every detail.',
    icon: '🌿',
  },
];

// FAQ questions and answers
export const faqs = [
  {
    id: '1',
    question: 'What areas do you serve?',
    answer:
      'We are based in Bowmanville and serve the entire Durham Region including Courtice, Oshawa, Whitby, Brooklin, Port Perry, Ajax, and Pickering. We also serve all of Toronto including Old Toronto, Scarborough, East York, York, North York, and Etobicoke.',
  },
  {
    id: '2',
    question: 'Do you offer free estimates?',
    answer:
      'Absolutely! We provide free on-site consultations and detailed estimates for every project. Jerome will visit your property, discuss your vision, and provide a transparent quote with no hidden fees or obligations.',
  },
  {
    id: '3',
    question: 'How long does a typical interlocking project take?',
    answer:
      'Most residential interlocking projects like driveways and walkways take 3-7 days depending on the size and complexity. Larger projects like full patio installations may take 1-2 weeks. We will give you a clear timeline during the estimate.',
  },
  {
    id: '4',
    question: 'What materials do you use for interlocking?',
    answer:
      'We source premium interlocking stone from trusted local suppliers. We offer a wide range of styles, colours, and patterns including concrete pavers, natural stone, and permeable options. We help you choose the best material for your property and climate.',
  },
  {
    id: '5',
    question: 'Are your retaining walls engineered properly?',
    answer:
      'Yes, safety and longevity are our top priorities. Our retaining walls are built with proper engineering, drainage systems, and base preparation. For walls over a certain height, we ensure all structural requirements and municipal codes are met.',
  },
  {
    id: '6',
    question: 'Do you handle permits for excavation work?',
    answer:
      'We are familiar with local building codes and permit requirements across our service areas. We can advise you on what permits may be needed for your project and help guide you through the process.',
  },
  {
    id: '7',
    question: 'What kind of excavation equipment do you use?',
    answer:
      'We have a fleet of well-maintained excavation equipment suited for residential and commercial projects of all sizes. This includes compact excavators for tight spaces and larger machines for commercial site work.',
  },
  {
    id: '8',
    question: 'Do you offer any warranties on your work?',
    answer:
      'Yes, we stand behind our craftsmanship. All of our interlocking and retaining wall projects come with a workmanship warranty. We also ensure that all manufacturer warranties on materials are passed on to you.',
  },
  {
    id: '9',
    question: 'Can you work with my existing landscape?',
    answer:
      'Absolutely. We are experienced in working around existing landscaping, gardens, and structures. We take care to minimize disruption to your property and can integrate new features seamlessly with your current outdoor space.',
  },
  {
    id: '10',
    question: 'How do I get started?',
    answer:
      'Simply give us a call at 705-772-1839 or fill out the contact form on this page. Jerome will get back to you promptly to schedule a free on-site consultation at your convenience.',
  },
];

// Real Google reviews
export const reviews = [
  {
    id: '1',
    clientName: 'Katherine Hobson',
    clientCity: 'Google Review',
    rating: 5,
    body: "Jerome and his team helped me install a gorgeous flagstone pad - it's not their usual style, but they followed my reference photos perfectly and I'm so pleased with the results. Incredibly efficient and hardworking, the project was finished much sooner than I expected! Would definitely recommend them, will definitely use them again.",
    image: '/images/review1.png',
  },
  {
    id: '2',
    clientName: 'Paul Williamson',
    clientCity: 'Google Review',
    rating: 5,
    body: "Landscape designs did a fantastic job. Very professional, help guide us through the design process and recommend great products. Jerome and his staff work very hard to ensure the job is done well and correct. We added some things through the project and they were happy to accommodate. You don't find many companies like this anymore, this was truly a great experience for us. We are very pleased and have recommended Jerome to a few friends that are very happy as well. They also cleaned up every night before they left. What a great experience thanks!",
    image: '/images/review2.png',
  },
  {
    id: '3',
    clientName: 'Christine Ling',
    clientCity: 'Google Review',
    rating: 5,
    body: 'We had these guys out to reseal and fix our interlock. They were very quick to respond and honest. I highly recommend them for any of your landscaping needs.',
    image: '/images/review3.png',
  },
  {
    id: '4',
    clientName: 'Jenn Corriveau',
    clientCity: 'Google Review',
    rating: 5,
    body: 'Absolutely an amazing company all around!!! Fast, efficient, and friendly. Truly the whole package. From our first phone contact to the completion of our job was less than 32 hours. Highly recommend this company for all your landscaping needs. Big and small.',
  },
  {
    id: '5',
    clientName: 'Andrew Dalton',
    clientCity: 'Google Review',
    rating: 5,
    body: 'Did an absolute amazing job on building my wall, driveway and stairs, helped create the vision we had. Workers were polite, punctual and nothing was too much trouble for them. I would highly recommend this company.',
  },
];

// Stats for trust section
export const stats = [
  { label: 'Projects Completed', value: '200+' },
  { label: '5-Star Reviews', value: '25+' },
  { label: 'Years Experience', value: '10+' },
  { label: 'Cities Served', value: '14' },
];

// Gallery images
export const galleryImages = [
  { src: '/images/gallery_image_4.jpg', alt: 'Completed interlocking driveway project', aspect: 'landscape' as const },
  { src: '/images/gallery_image_5.jpg', alt: 'Retaining wall with garden integration', aspect: 'portrait' as const },
  { src: '/images/gallery_image_6.jpg', alt: 'Custom stone patio and seating area', aspect: 'landscape' as const },
  { src: '/images/gallery_image_7.jpg', alt: 'Interlocking walkway with border detail', aspect: 'landscape' as const },
  { src: '/images/gallery_image_8.jpg', alt: 'Tiered retaining wall transformation', aspect: 'portrait' as const },
  { src: '/images/gallery_image_9.jpg', alt: 'Residential excavation and grading', aspect: 'landscape' as const },
  { src: '/images/gallery_image_10.jpg', alt: 'Finished interlocking pool surround', aspect: 'landscape' as const },
  { src: '/images/gallery_image_11.jpg', alt: 'Natural stone retaining wall', aspect: 'portrait' as const },
  { src: '/images/gallery_image_12.jpg', alt: 'Custom driveway with pattern design', aspect: 'landscape' as const },
  { src: '/images/gallery_image_13.jpg', alt: 'Backyard landscape transformation', aspect: 'landscape' as const },
  { src: '/images/gallery_image_14.jpg', alt: 'Excavation site preparation', aspect: 'landscape' as const },
  { src: '/images/gallery_image_15.jpg', alt: 'Completed walkway and steps', aspect: 'portrait' as const },
];

// Hero image
export const heroImage = '/images/gallery_image_16.jpg';

// About section image
export const aboutImage = '/images/gallery_image_17.jpg';

// Additional project images for creative use
export const projectImages = {
  serviceInterlocking: '/images/gallery_image_1.jpg',
  serviceRetaining: '/images/gallery_image_2.jpg',
  serviceExcavation: '/images/gallery_image_3.jpg',
  processBuild: '/images/gallery_image_18.jpg',
  processEnjoy: '/images/gallery_image_19.jpg',
};

// Business info
export const businessInfo = {
  name: 'Landscape Designs Ontario',
  tagline: 'Interlocking \u2022 Retaining Walls \u2022 Excavation',
  owner: 'Jerome',
  phone: '705-772-1839',
  phoneFormatted: '(705) 772-1839',
  phoneHref: 'tel:+17057721839',
  email: 'landscapedesignsontario@gmail.com',
  address: 'Bowmanville, Ontario',
};
