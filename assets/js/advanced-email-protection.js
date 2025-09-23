// Advanced email protection with character encoding
function advancedEmailProtection() {
  // Character codes for the email (obfuscated)
  const emailCodes = [
    98, 97, 116, 104, 99, 108, 111, 116, 104, 110, 97, 112, 112, 121, 108, 105, 98, 114, 97, 114, 121,
    64, // @ symbol
    103, 109, 97, 105, 108, 46, 99, 111, 109
  ];
  
  // Convert character codes to string
  const email = String.fromCharCode(...emailCodes);
  
  // Find all protected elements
  const protectedElements = document.querySelectorAll('[data-email="protected"]');
  
  protectedElements.forEach(element => {
    if (element.tagName === 'A') {
      element.href = 'mailto:' + email;
      element.textContent = email;
    } else {
      element.textContent = email;
    }
  });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', advancedEmailProtection);
