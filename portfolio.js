document.addEventListener("DOMContentLoaded", function () {

    // Typing Effect
    const typingEffect = document.getElementById("typing-effect");
    const words = ["Abhishek Dhanraj Gaikwad", "a Developer", "an Entrepreneur", "a Dancer"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingEffect.textContent = currentWord.substring(0, letterIndex--);
        } else {
            typingEffect.textContent = currentWord.substring(0, letterIndex++);
        }

        let speed = isDeleting ? 100 : 150;
        if (!isDeleting && letterIndex === currentWord.length) {
            isDeleting = true;
            speed = 1000;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

});
