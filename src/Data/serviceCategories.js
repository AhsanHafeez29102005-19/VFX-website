/**
 * Each key = URL slug under /services/:slug
 * Each service has multiple "tabs" (sub-categories), each rendered as its
 * own before/after block. This mirrors the dynamic-subpage pattern.
 */
export const serviceCategories = [
  {
    slug: 'vfx-cleanup',
    navLabel: 'VFX Cleanup & Object Removal',
    eyebrow: 'Professional VFX Cleanup Services',
    title: 'VFX Cleanup &\nObject Removal',
    description:
      "I remove unwanted objects, logos, people, wires, shadows, reflections and anything that distracts from your scene. 100% natural results with precision and care.",
    color: 'green',
    tabs: [
      { id: 'object-removal', label: 'Object Removal', icon: 'Object', title: 'Object Removal', description: 'Remove any unwanted object from your video and get clean, natural results.', features: ['Street Objects', 'Trash & Dust', 'Equipment Removal', 'Background Cleanup'] },
      { id: 'logo-removal', label: 'Logo Removal', icon: 'Logo', title: 'Logo Removal', description: 'Remove logos, text or watermarks from any surface or object.' },
      { id: 'wire-removal', label: 'Wire Removal', icon: 'Wire', title: 'Wire Removal', description: 'Remove wires, cables and rigging naturally from your footage.' },
      { id: 'people-removal', label: 'People Removal', icon: 'People', title: 'People Removal', description: 'Remove unwanted people or crew members from your shots.' },
      { id: 'shadow-removal', label: 'Shadow Removal', icon: 'Shadow', title: 'Shadow Removal', description: 'Remove unwanted shadows and get consistent, natural lighting.' },
      { id: 'reflection-removal', label: 'Reflection Removal', icon: 'Reflection', title: 'Reflection Removal', description: 'Clean up unwanted reflections in glass, water and metal surfaces.' },
      { id: 'boom-mic-removal', label: 'Boom Mic Removal', icon: 'Mic', title: 'Boom Mic Removal', description: 'Remove boom mics and rigging seamlessly from your frame.' },
    ],
  },
  {
    slug: 'rotoscoping',
    navLabel: 'Rotoscoping & Green Screen',
    eyebrow: 'Professional Rotoscoping Services',
    title: 'Rotoscoping &\nGreen Screen',
    description:
      'I create precise masks and clean extractions frame by frame for perfect results. From simple to complex, I deliver high quality mattes with attention to every detail.',
    color: 'purple',
    tabs: [
      { id: 'rotoscoping', label: 'Rotoscoping', icon: 'Roto', title: 'Rotoscoping', description: 'Accurate rotoscoping for people, objects or anything in motion. Perfect edges with smooth results for any background.' },
      { id: 'green-screen', label: 'Green Screen', icon: 'GreenScreen', title: 'Green Screen / Alpha Channel', description: 'Remove any green/blue screen and replace with any background. Clean edges, no spill, perfect for film, ads and videos.' },
      { id: 'hair', label: 'Hair', icon: 'Hair', title: 'Hair Rotoscoping', description: 'Fine, detailed hair extraction that keeps every strand natural.' },
      { id: 'complex-motion', label: 'Complex Motion', icon: 'Motion', title: 'Complex Motion', description: 'Frame-accurate masking even through fast or complex movement.' },
      { id: 'product', label: 'Product', icon: 'Product', title: 'Product Rotoscoping', description: 'Clean product isolation for ads, e-commerce and promo videos.' },
      { id: 'vehicle', label: 'Vehicle', icon: 'Vehicle', title: 'Vehicle Rotoscoping', description: 'Precise vehicle masking for compositing and background swaps.' },
      { id: 'alpha-channel', label: 'Alpha Channel', icon: 'Alpha', title: 'Alpha Channel Export', description: 'Delivery with clean alpha channels ready to drop into any edit.' },
    ],
  },
  {
    slug: 'screen-replacement',
    navLabel: 'Screen Replacement',
    eyebrow: 'Professional Screen Replacement Services',
    title: 'Screen\nReplacement',
    description:
      'I replace screens and text in any device, display, billboard or paper with perfect tracking, perspective and natural lighting.',
    color: 'orange',
    tabs: [
      { id: 'computer-screen', label: 'Computer Screen', icon: 'ComputerScreen', title: 'Computer Screen Replacement', description: 'Replace content on any computer or laptop screen with perfect perspective, reflections and lighting.' },
      { id: 'phone-screen', label: 'Phone Screen', icon: 'PhoneScreen', title: 'Phone Screen Replacement', description: 'Replace any phone screen content with accurate tracking and natural hand interactions.' },
      { id: 'billboard-screen', label: 'Billboard Screen', icon: 'Billboard', title: 'Billboard Screen Replacement', description: 'Replace billboard content in any environment with realistic perspective, lighting and shadows.' },
      { id: 'text-replacement', label: 'Text Replacement', icon: 'Text', title: 'Text Replacement on Paper / Object', description: 'Replace any text on paper, signs or objects while keeping the texture, shadows and folds natural.' },
    ],
  },
  {
    slug: 'blur',
    navLabel: 'Blur Sensitive Information',
    eyebrow: 'Professional Blur Sensitive Information Services',
    title: 'Blur Sensitive\nInformation',
    description:
      'I blur sensitive information in your videos and images to protect privacy and keep your content safe and professional.',
    color: 'pink',
    tabs: [
      { id: 'face-blur', label: 'Face Blur', icon: 'Face', title: 'Face Blur', description: 'Blur faces and identities to protect privacy while keeping the shot natural and clean.' },
      { id: 'license-plate', label: 'License Plate', icon: 'Plate', title: 'License Plate Blur', description: 'Blur vehicle license plates to comply with privacy regulations and client requirements.' },
      { id: 'documents', label: 'Documents', icon: 'Document', title: 'Documents Blur', description: 'Blur sensitive text and personal information on documents, IDs, forms and certificates.' },
      { id: 'computer-screen-blur', label: 'Computer Screen', icon: 'ComputerScreen', title: 'Computer Screen Blur', description: 'Blur private information on computer screens, software, dashboards and recorded content.' },
      { id: 'email-contact', label: 'Email & Contact', icon: 'Email', title: 'Email & Contact Blur', description: 'Blur email addresses and contact details visible on screen or paper.' },
      { id: 'phone-number', label: 'Phone Number', icon: 'Phone', title: 'Phone Number Blur', description: 'Blur visible phone numbers to protect personal or business privacy.' },
      { id: 'address', label: 'Address', icon: 'Address', title: 'Address Blur', description: 'Blur home or business addresses shown on documents or screens.' },
      { id: 'logo-brand', label: 'Logo & Brand', icon: 'Brand', title: 'Logo & Brand Blur', description: 'Blur brand logos or trademarks that cannot be shown without permission.' },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  serviceCategories.find((service) => service.slug === slug);
