// Google Analytics 4 & Microsoft Clarity tracking utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    clarity: (...args: unknown[]) => void;
  }
}

// Track custom events to GA4
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || 'unknown',
  });
  
  // Also track in Clarity
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', 'button_clicked', buttonName);
  }
};

// Track image clicks
export const trackImageClick = (imageName: string, section?: string) => {
  trackEvent('image_click', {
    image_name: imageName,
    section: section || 'unknown',
  });
};

// Track section views
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};

// Track external link clicks
export const trackExternalLink = (linkUrl: string, linkName: string) => {
  trackEvent('external_link_click', {
    link_url: linkUrl,
    link_name: linkName,
  });
};

// Track phone/WhatsApp clicks
export const trackContactClick = (contactType: 'phone' | 'whatsapp' | 'email', value: string) => {
  trackEvent('contact_click', {
    contact_type: contactType,
    contact_value: value,
  });
};
