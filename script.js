const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const resultsSection = document.getElementById("results");

const destinations = [
  {
    category: "Beach",
    places: [
      {
        name: "Bali",
        description: "A tropical paradise with lush jungles and stunning beaches.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      },
      {
        name: "Maldives",
        description: "Crystal clear waters and luxurious overwater bungalows.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      }
    ]
  },
  {
    category: "Temple",
    places: [
      {
        name: "Angkor Wat, Cambodia",
        description: "Majestic temple complex and UNESCO World Heritage site.",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
      },
      {
        name: "Golden Temple, India",
        description: "A sacred site of spiritual significance and stunning architecture.",
        image: "Golden_Temple_India.jpg"
      }
    ]
  },
  {
    category: "Country",
    places: [
      {
        name: "Japan",
        description: "Blend of ancient traditions and modern wonders.",
        image: "372657.jpg"
      },
      {
        name: "Italy",
        description: "Rich culture, historic architecture, and delicious cuisine.",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
      }
    ]
  }
];

function displayRecommendations(filteredDestinations = destinations) {
  resultsSection.innerHTML = "";

  filteredDestinations.forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category-section");

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category.category + " Recommendations";
    categoryDiv.appendChild(categoryTitle);

    const placesDiv = document.createElement("div");
    placesDiv.classList.add("places-container");

    category.places.forEach(place => {
      const card = document.createElement("div");
      card.classList.add("result-card");

      card.innerHTML = `
        <img src="${place.image}" alt="${place.name}">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
      `;
      placesDiv.appendChild(card);
    });

    categoryDiv.appendChild(placesDiv);
    resultsSection.appendChild(categoryDiv);
  });
}

function searchDestinations() {
  const query = searchInput.value.toLowerCase();

  if (!query) {
    displayRecommendations();
    return;
  }

  const filtered = destinations
    .map(category => {
      const matchingPlaces = category.places.filter(place =>
        place.name.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query) ||
        category.category.toLowerCase().includes(query)
      );
      return {
        category: category.category,
        places: matchingPlaces
      };
    })
    .filter(category => category.places.length > 0);

  displayRecommendations(filtered);
}

function showAboutUs() {
  resultsSection.innerHTML = `
    <div class="category-section about-section">
      <h2>About Us</h2>
      <div class="about-content">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Travel">
        <div>
          <p>
            🌍 Welcome to <strong>Travel Explorer</strong> — your ultimate travel guide. 
            Our mission is to inspire your wanderlust by bringing you curated recommendations
            for breathtaking destinations across the globe. From serene beaches to majestic temples
            and vibrant countries, we help you explore with confidence.
          </p>
          <p>
            Join our community and start your journey today. Whether you’re a solo traveler,
            a family, or an adventurer, we make sure you discover the world’s wonders.
          </p>
        </div>
      </div>
    </div>
  `;
}

function showContactUs() {
  resultsSection.innerHTML = `
    <div class="category-section contact-section">
      <h2>Contact Us</h2>
      <div class="contact-content">
        <div class="contact-info">
          <p>
            📧 Email: <a href="mailto:contact@travelexplorer.com">contact@travelexplorer.com</a><br>
            📞 Phone: +123 456 7890<br>
            📍 Address: 123 Travel Lane, Adventure City, World
          </p>
          <p>
            We’d love to hear from you! Whether you have questions, suggestions, or want to collaborate,
            feel free to get in touch. Let’s make travel dreams come true!
          </p>
        </div>
        <form id="contactForm" class="contact-form">
          <input type="text" id="name" name="name" placeholder="Your Name" required>
          <input type="email" id="email" name="email" placeholder="Your Email" required>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  `;

  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We’ll get back to you soon.");
    contactForm.reset();
  });
}



searchButton.addEventListener("click", searchDestinations);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  displayRecommendations();
});

displayRecommendations();
