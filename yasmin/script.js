// Intersection Observer for Fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Countdown Logic
    const eventDate = new Date('December 20, 2025 14:00:00').getTime(); // Updated to future date

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `
                <div><span>${days}</span>Días</div>
                <div><span>${hours}</span>Horas</div>
                <div><span>${minutes}</span>Min</div>
                <div><span>${seconds}</span>Seg</div>
            `;
        }

        if (distance < 0) {
            clearInterval(countdown);
            if (countdownElement) countdownElement.innerHTML = "¡Ya es el día!";
        }
    }, 1000);

    // Scroll Indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // RSVP Button Logic (Simple interaction)
    const form = document.getElementById('rsvpForm');
    const btnConfirm = document.querySelector('.btn-confirm');
    const btnDecline = document.querySelector('.btn-decline');

    if (btnConfirm) {
        btnConfirm.addEventListener('click', () => {
            const input = form.querySelector('input');
            if (input.value.trim() === "") {
                alert("Por favor escribe tu nombre");
                return;
            }
            // In a real app, this would send data to a server
            const message = `¡Gracias ${input.value}! Hemos confirmado tu asistencia.`;
            alert(message);
            // Optionally clear or hide form
            input.value = '';
        });
    }

    if (btnDecline) {
        btnDecline.addEventListener('click', () => {
            const input = form.querySelector('input');
            if (input.value.trim() === "") {
                alert("Por favor escribe tu nombre");
                return;
            }
            const message = `Gracias ${input.value} por avisarnos. Te extrañaremos.`;
            alert(message);
            input.value = '';
        });
    }
});
