document.addEventListener("DOMContentLoaded", () => {

    const menuBtn =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector("nav");

    if(menuBtn){

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("active");

        });

    }

});

document.addEventListener("DOMContentLoaded", () => {

    const popup = document.getElementById("noticePopup");
    const closeBtn = document.getElementById("closePopup");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

});

// ===============================
// 1. Language Switch
// ===============================
function initLangSwitch() {

    const langBtn = document.querySelector(".lang-switch");
    if (!langBtn) return;

    langBtn.addEventListener("click", () => {
        alert("Language switch will be available in V1.1");
    });
}


// ===============================
// 2. Header Shrink on Scroll
// ===============================
function initHeaderShrink() {

    const header = document.querySelector("header");
    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }

    });
}


// ===============================
// 3. Fade-in Animation
// ===============================
function initFadeIn() {

    const elements = document.querySelectorAll(".fade-in");

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });

    });

    elements.forEach(el => observer.observe(el));
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function(e) {

        e.preventDefault();

        const form = this;

        const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {

            window.location.href = "./thank-you.html";

        } else {

            alert("Submission failed. Please try again.");

        }

    });

}
