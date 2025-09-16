// ...existing code...
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// ...existing code...// ...existing code...
if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    targetElement.setAttribute('tabindex', '-1');
    targetElement.focus({ preventScroll: true });
}
// ...existing code...// This file contains JavaScript code for interactivity in the portfolio.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission handling (example)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you can add your form submission logic
            alert('Form submitted! Thank you for your message.');
            contactForm.reset();
        });
    }
});