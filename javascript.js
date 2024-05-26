document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form submission logic
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        console.log('Form submitted:', { name, email, subject, message });

        // Add AJAX request to send form data to the server

        alert('Thank you for contacting us!');
        contactForm.reset();
    });
});
