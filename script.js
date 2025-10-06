const destinations = [
  { 
    name: "Paris", 
    description: "The city of lights and love.", 
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" 
  },
  { 
    name: "Tokyo", 
    description: "A vibrant mix of tradition and technology.", 
    image: "https://images.unsplash.com/photo-1505066836043-7a0fef4a6eb3" 
  },
  { 
    name: "New York", 
    description: "The city that never sleeps.", 
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442" 
  },
  { 
    name: "Sydney", 
    description: "Famous for its Opera House and beaches.", 
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad89" 
  },
  { 
    name: "Cairo", 
    description: "Explore ancient history and the Great Pyramids.", 
    image: "https://images.unsplash.com/photo-1584395630827-860eee694d7b" 
  },
  { 
    name: "Bali", 
    description: "A tropical paradise with lush jungles and stunning beaches.", 
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
  }
];

// DOM Elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsSection = document.getElementById("results");

const hero = document.getElementById("hero");
const searchSection = document.getElementById("search-section");
const aboutSection = document.getElementById("about-section");
const contactSection = document.getElementById("contact-section");

const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");

// Search functionality
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = destinations.filter(dest => dest.name.toLowerCase().includes(query));

  if (filtered.length > 0) {
    resultsSection.innerHTML = filtered
      .map(dest => `
        <div class="result-card">
          <img src="${dest.image}" alt="${dest.name}">
          <h3>${dest.name}</h3>
          <p>${dest.description}</p>
        </div>
      `)
      .join("");
  } else {
    resultsSection.innerHTML = "<p>No destinations found.</p>";
  }
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  resultsSection.innerHTML = "";
});

// Navigation behavior
function showSection(sectionToShow) {
  hero.style.display = "none";
  searchSection.style.display = "none";
  aboutSection.classList.add("hidden");
  contactSection.classList.add("hidden");
  resultsSection.innerHTML = "";
  sectionToShow.classList.remove("hidden");
}

homeLink.addEventListener("click", () => {
  hero.style.display = "flex";
  searchSection.style.display = "block";
  aboutSection.classList.add("hidden");
  contactSection.classList.add("hidden");
  resultsSection.innerHTML = "";
});

aboutLink.addEventListener("click", () => showSection(aboutSection));
contactLink.addEventListener("click", () => showSection(contactSection));

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for your message! We’ll get back to you soon.");
  e.target.reset();
});
