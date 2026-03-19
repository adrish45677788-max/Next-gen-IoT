document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. Live AQI Simulator ---
    const aqiValueElement = document.getElementById("aqi-value");
    let currentAqi = 45;

    setInterval(() => {
        // Randomly fluctuate the AQI up or down
        const fluctuation = Math.floor(Math.random() * 3) - 1; 
        currentAqi += fluctuation;

        // Keep it within a realistic "Good" range
        if (currentAqi > 55) currentAqi = 55;
        if (currentAqi < 35) currentAqi = 35;

        // Update the HTML if the element exists
        if (aqiValueElement) {
            aqiValueElement.innerText = currentAqi;
        }
    }, 2500);


    // --- 2. Smooth Scroll Reveal Animation ---
    // This watches for elements to appear on the screen
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers the animation when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class when it scrolls into view
                entry.target.classList.add('visible');
                // Stop watching it so it doesn't animate again if they scroll up
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Select all the parts of the website we want to animate
    const hiddenElements = document.querySelectorAll('.section, .team-member, .project-card, .video-container');
    
    hiddenElements.forEach((el) => {
        el.classList.add('hidden'); // Hide them initially via JS
        observer.observe(el);       // Start watching them
    });
});
