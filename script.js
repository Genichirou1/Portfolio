const texts = [".NET developer", "Desktop developer"];
const speed = 100;
const eraseSpeed = 50;
const delay = 1500;
const dynamicText = document.querySelector(".dynamic-text");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        charIndex--;
        dynamicText.textContent = currentText.substring(0, charIndex);
    } else {
        charIndex++;
        dynamicText.textContent = currentText.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, delay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});





const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) { 
        scrollToTopButton.style.opacity = "1";
    } else {
        scrollToTopButton.style.opacity = "0";
    }
});


scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

