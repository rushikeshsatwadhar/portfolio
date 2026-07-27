/* ==========================================
   PORTFOLIO WEBSITE - SCRIPT.JS
   Author: Rushikesh Satwadhar
========================================== */

/* ==========================================
   MOBILE HAMBURGER MENU
========================================== */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

});

// Close menu after clicking any navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");

    });

});


/* ==========================================
   TYPING ANIMATION
========================================== */

const typingElement = document.getElementById("typing");

const words = [

    "DevOps Engineer",
    "AWS Cloud Engineer",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

// Keep Contact active at the bottom of the page
window.addEventListener("scroll", () => {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {

        navLinks.forEach(link => link.classList.remove("active"));

        document
            .querySelector('.nav-links a[href="#contact"]')
            .classList.add("active");
    }

});


/* ==========================================
   INTERSECTION OBSERVER
========================================== */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});

reveals.forEach(item => observer.observe(item));


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("✅ Message Sent Successfully!");

    contactForm.reset();

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "scrollTop";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#007BFF";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";
topButton.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ==========================================
   HEADER SHADOW ON SCROLL
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ==========================================
   PROJECT CARD HOVER EFFECT
========================================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


/* ==========================================
   PRELOADER (OPTIONAL)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(`
==========================================
 Portfolio by Rushikesh Satwadhar
 DevOps Engineer
 HTML | CSS | JavaScript
==========================================
`);

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");
    themeToggle.classList.toggle("active");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme","light");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme","dark");

    }

});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "light"){

        document.body.classList.add("light-mode");
        themeToggle.classList.add("active");

        const icon = themeToggle.querySelector("i");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

});