// Sample events data
const events = [
    {
        id: 1,
        name: "Hochzeitsfest",
        description: "Professionelle DJ für Ihre Hochzeit mit kompletter Sound- und Lichttechnik.",
        price: "ab 500€",
        icon: "💒"
    },
    {
        id: 2,
        name: "Geburtstagparty",
        description: "Feiern Sie Ihren Geburtstag mit unserem modernen DJ-Service.",
        price: "ab 300€",
        icon: "🎂"
    },
    {
        id: 3,
        name: "Unternehmensevent",
        description: "Professionelle Unterhaltung für Firmenfeiern und Konferenzen.",
        price: "ab 400€",
        icon: "🏢"
    },
    {
        id: 4,
        name: "Club-Event",
        description: "Hochwertige Sound- und Lichttechnik für unvergessliche Club-Nächte.",
        price: "ab 600€",
        icon: "🎧"
    },
    {
        id: 5,
        name: "Private Party",
        description: "Perfekte Musik und Unterhaltung für Ihre private Feier.",
        price: "ab 250€",
        icon: "🎉"
    },
    {
        id: 6,
        name: "Firmenfeier",
        description: "Livemusik und DJ-Service für Ihre Weihnachtsfeier oder Sommerfest.",
        price: "ab 350€",
        icon: "🎄"
    }
];

// Load events on page load
document.addEventListener('DOMContentLoaded', function() {
    loadEvents();
    setupFormHandling();
    smoothScroll();
});

// Load and display events
function loadEvents() {
    const eventsGrid = document.getElementById('eventsGrid');
    eventsGrid.innerHTML = '';

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-card-header">
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">${event.icon}</div>
                <h3>${event.name}</h3>
            </div>
            <div class="event-card-body">
                <p>${event.description}</p>
                <div class="event-price">${event.price}</div>
            </div>
        `;
        eventsGrid.appendChild(eventCard);
    });
}

// Setup form handling
function setupFormHandling() {
    const bookingForm = document.getElementById('bookingForm');
    const successMessage = document.getElementById('successMessage');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            eventType: document.getElementById('eventType').value,
            eventDate: document.getElementById('eventDate').value,
            eventTime: document.getElementById('eventTime').value,
            location: document.getElementById('location').value,
            guests: document.getElementById('guests').value,
            duration: document.getElementById('duration').value,
            budget: document.getElementById('budget').value,
            specialRequests: document.getElementById('specialRequests').value
        };

        // Log form data (in production, this would be sent to a server)
        console.log('Booking Request:', formData);

        // Show success message
        successMessage.style.display = 'block';
        bookingForm.style.display = 'none';

        // Reset form after 3 seconds and hide success message
        setTimeout(() => {
            bookingForm.reset();
            bookingForm.style.display = 'block';
            successMessage.style.display = 'none';
        }, 3000);
    });
}

// Smooth scrolling for navigation links
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add form validation for future date
document.getElementById('eventDate')?.addEventListener('change', function() {
    const selectedDate = new Date(this.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        alert('Bitte wählen Sie ein zukünftiges Datum.');
        this.value = '';
    }
});