// Email protection script
function protectEmail() {
  // Split email into parts to avoid detection
  const emailParts = [
    'bathclothnappylibrary',
    '@',
    'gmail.com'
  ];
  
  const fullEmail = emailParts.join('');
  
  // Find all elements with data-email attribute
  const emailElements = document.querySelectorAll('[data-email="protected"]');
  
  emailElements.forEach(element => {
    if (element.tagName === 'A') {
      element.href = 'mailto:' + fullEmail;
      element.textContent = fullEmail;
    } else {
      element.textContent = fullEmail;
    }
  });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', protectEmail);
