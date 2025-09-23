// Contact form handler
function handleContactForm() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact from ${name} - Bath Cloth Nappy Library`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:bathclothnappylibrary@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4';
      successMessage.textContent = 'Your email client should open with a pre-filled message. If not, please email us directly.';
      
      contactForm.parentNode.insertBefore(successMessage, contactForm);
      
      // Reset form
      contactForm.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        if (successMessage.parentNode) {
          successMessage.parentNode.removeChild(successMessage);
        }
      }, 5000);
    });
  }
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', handleContactForm);
