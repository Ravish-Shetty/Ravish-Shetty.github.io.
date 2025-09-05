document.addEventListener("DOMContentLoaded", function() {


// --- 1. THEME SWITCHER (Always starts in Light Mode) ---
const themeToggle = document.getElementById('theme-toggle-checkbox');
const body = document.body;

// We set the toggle to unchecked on every page load to ensure it matches the default light mode
themeToggle.checked = false;

themeToggle.addEventListener('change', function() {
    // This now simply toggles the class on the body without saving anything
    if (this.checked) {
        // If the toggle is checked, switch to dark mode
        body.classList.replace('light-mode', 'dark-mode');
    } else {
        // If it's unchecked, switch back to light mode
        body.classList.replace('dark-mode', 'light-mode');
    }
});

    // --- 2. STICKY HEADER ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 3. ACTIVE NAVIGATION LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});