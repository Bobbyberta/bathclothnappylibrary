// Google Analytics 4 (GA4) tracking code
// Replace 'G-XXXXXXXXXX' with your actual Measurement ID from Google Analytics

// Configuration
const GA_MEASUREMENT_ID = 'G-LCZ0DMFQWV'; // Replace with your actual ID

// Load Google Analytics script
function loadGoogleAnalytics() {
  // Create script element
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  
  // Append to head
  document.head.appendChild(script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  
  // Configure
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    'page_title': document.title,
    'page_location': window.location.href,
    'custom_map': {
      'custom_parameter_1': 'site_type',
      'custom_parameter_2': 'organization_type'
    }
  });
  
  // Set custom parameters
  gtag('config', GA_MEASUREMENT_ID, {
    'site_type': 'non_profit',
    'organization_type': 'nappy_library'
  });
}

// Load analytics when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadGoogleAnalytics);
} else {
  loadGoogleAnalytics();
}

// Track page views
function trackPageView(pageTitle, pageLocation) {
  if (typeof gtag !== 'undefined') {
    gtag('config', GA_MEASUREMENT_ID, {
      'page_title': pageTitle,
      'page_location': pageLocation
    });
  }
}

// Track custom events
function trackEvent(eventName, parameters = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
}

// Track contact form submissions
function trackContactForm() {
  const contactLinks = document.querySelectorAll('a[data-email="protected"]');
  contactLinks.forEach(link => {
    link.addEventListener('click', function() {
      trackEvent('contact_click', {
        'event_category': 'engagement',
        'event_label': 'email_contact',
        'value': 1
      });
    });
  });
}

// Track kit interest
function trackKitInterest() {
  const kitLinks = document.querySelectorAll('a[href*="kits.html"]');
  kitLinks.forEach(link => {
    link.addEventListener('click', function() {
      trackEvent('kit_interest', {
        'event_category': 'engagement',
        'event_label': 'kit_page_view',
        'value': 1
      });
    });
  });
}

// Initialize tracking when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  trackContactForm();
  trackKitInterest();
});
