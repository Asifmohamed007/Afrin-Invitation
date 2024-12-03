document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1200,
        once: true,
        mirror: true
    });

    // Background Music Setup with autoplay
    const bgMusic = document.getElementById('bgMusic'); 
    
    // Function to handle user interaction and play music
    const handleUserInteraction = () => {
        bgMusic.play().catch(error => {
            console.log("Autoplay prevented by browser policy");
        });
        // Remove the event listeners once music starts
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    // Try to play music automatically
    bgMusic.play().catch(error => {
        console.log("Waiting for user interaction to play music");
    });

    // Scroll to top functionality
    const scrollTop = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Save the Date functionality
    document.querySelector('.save-date-btn').addEventListener('click', () => {
        const event = {
            title: "Yaser Arafath & Afrin Thabeeba's Wedding Reception ❤️",
            description: "Join us at Grace Family Hall for a wonderful evening with dinner, celebrations, and lasting memories.",
            location: "Grace Family Hall",
            start: new Date('2025-05-25T18:30:00'), // Starting time for the event
            end: new Date('2025-05-25T22:00:00'), // Ending time for the event
        };

        // Format the dates to match Google Calendar's format (YYYYMMDDTHHMMSSZ)
        const startDate = event.start.toISOString().replace(/[-:]|\.\d{3}/g, '');
        const endDate = event.end.toISOString().replace(/[-:]|\.\d{3}/g, '');

        // Create the Google Calendar URL with the event details
        const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${startDate}/${endDate}&sf=true&output=xml`;

        // Open the generated URL in a new tab to add the event to Google Calendar
        window.open(calendarUrl, '_blank');
    });



    // Download Invitation functionality
    document.querySelector('.download-btn').addEventListener('click', async () => {
        const element = document.querySelector('.invitation-card');
        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false
            });
            const imgData = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'wedding-invitation.png';
            link.href = imgData;
            link.click();
        } catch (error) {
            console.error('Error generating invitation:', error);
        }
    });

    // View Venue button scroll to map and open it in a new tab
document.querySelector('.view-venue-btn').addEventListener('click', () => {
    // Smooth scroll to the map container (if it's part of the page)
    document.querySelector('.map-container').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // Open the map in a new tab
    const mapUrl = 'https://maps.app.goo.gl/buBsVSxyBRcQBBZr9'; // The map URL
    window.open(mapUrl, '_blank'); // Opens the map URL in a new tab
});


    // Add hover effect to social buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1) translateY(-5px) rotate(360deg)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1) translateY(0) rotate(0)';
        });
    });

    // Create floating hearts animation
    const createHeart = () => {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.color = `rgba(255, ${Math.random() * 50 + 107}, ${Math.random() * 50 + 107}, ${Math.random() * 0.3 + 0.2})`;
        heart.style.position = 'fixed';
        heart.style.top = '-5vh';
        heart.style.animation = 'float 3s linear infinite';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    };

    setInterval(createHeart, 300);
});

// Add floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


// <!-- SCRIPT FOR NOT COPYING THE CODE -->
  
 // Disable right-click
 document.addEventListener('contextmenu', event => event.preventDefault());
  
 document.addEventListener('keydown', function(event) {
 // Disable F12
 if (event.key === 'F12') {
   event.preventDefault();
 }
 // Disable Ctrl+U
 if (event.ctrlKey && event.key === 'u') {
   event.preventDefault();
 }
 // Disable Ctrl+Shift+I
 if (event.ctrlKey && event.shiftKey && event.key === 'I') {
   event.preventDefault();
 }
 // Disable Ctrl+Shift+J
 if (event.ctrlKey && event.shiftKey && event.key === 'J') {
   event.preventDefault();
 }
});

// Disable right-click
document.addEventListener('contextmenu', function(event) {
 event.preventDefault();
});