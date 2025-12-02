// ================= MOBILE MENU =================
const mobMenu = document.getElementById("mobMenu");
const navMenu = document.getElementById("navMenu");

if (mobMenu && navMenu) {
    mobMenu.addEventListener("click", () => {
        navMenu.style.display = (navMenu.style.display === "flex") ? "none" : "flex";
    });
}

// Hide menu when clicking a nav item
document.querySelectorAll(".listItem").forEach(item => {
    item.addEventListener("click", () => {
        if (navMenu) navMenu.style.display = "none";
    });
});

// ================= TYPED TEXT =================
var typed = new Typed("#typed", {
    strings: [
        "Frontend Developer",
        "Data Analyst",
        "Business Analyst"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// ================= HIRE ME POPUP =================
const hireBtn = document.getElementById("hireBtn");
const hireMenu = document.getElementById("hireMenu");

if (hireBtn && hireMenu) {
    hireBtn.addEventListener("click", () => {
        // Toggle popup visibility
        hireMenu.style.display = hireMenu.style.display === "flex" ? "none" : "flex";
    });

    // Close popup when clicking outside
    document.addEventListener("click", (e) => {
        if (!hireBtn.contains(e.target) && !hireMenu.contains(e.target)) {
            hireMenu.style.display = "none";
        }
    });
}

// ================= SMOOTH SCROLLING FOR NAV =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;

        e.preventDefault();
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

// ================= CONTACT FORM HANDLING =================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert(`Thank you, ${name}! Your message has been received.`);
        contactForm.reset();
    });
}
