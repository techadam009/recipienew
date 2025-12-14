// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.style.background = type === 'success' ? '#10b981' : '#ef4444';
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Form Submission
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Validate (basic validation, browser will handle required fields)
        if (!name || !email || !message) {
            showToast('Please fill in all required fields.', 'error');
            return;
        }

        // Simulate form submission
        showToast('Message sent successfully! We\'ll get back to you soon.');

        // Reset form
        form.reset();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
});
