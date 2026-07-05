// No backend required: builds WhatsApp click-to-chat and mailto links from
// form data so quote/contact requests can be sent immediately.

export const WHATSAPP_NUMBER = '923061234567'; // no + or leading zeros
export const CONTACT_EMAIL = 'ikramvfxstudio@gmail.com';

const line = (label, value) => (value ? `${label}: ${value}\n` : '');

export const buildWhatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const buildMailtoLink = (subject, message) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

export const formatQuoteMessage = (form) =>
  `New Quote Request\n\n${line('Name', form.name)}${line('Email', form.email)}${line(
    'WhatsApp',
    form.whatsapp
  )}${line('Service', form.service)}${line('Deadline', form.deadline)}${line(
    'Budget',
    form.budget
  )}\nProject Description:\n${form.description || '-'}`;

export const formatContactMessage = (form) =>
  `New Contact Message\n\n${line('Name', form.name)}${line('Email', form.email)}${line(
    'WhatsApp',
    form.whatsapp
  )}\nMessage:\n${form.message || '-'}`;

/**
 * Opens a WhatsApp chat with the message pre-filled. Returns false if the
 * popup was blocked so the caller can fall back to the mailto option.
 */
export const sendViaWhatsapp = (message) => {
  const win = window.open(buildWhatsappLink(message), '_blank', 'noopener,noreferrer');
  return !!win;
};

export const sendViaEmail = (subject, message) => {
  window.location.href = buildMailtoLink(subject, message);
};
