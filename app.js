// Initialize AOS
AOS.init();

// Destination Data
const destinations = [
  {
    name: "10 Day Package",
    images: [
      "assets/image/img4.jpg",
      "assets/image/img6.jpg",
      "assets/image/img10.jpg"
    ],
    description: "Sigiriya, also known as the Lion Rock, is one of Sri Lanka’s most iconic landmarks and a UNESCO World Heritage Site...",
    province: "Central Province",
    district: "Matale District",
    Location: "Near the town of Dambulla, about 175 km northeast of Colombo"
    
  },
  {
    name: "Bopath Waterfall",
    images: [
      "asset/images/bopathella.jpg",
      "asset/images/bopathella (2).jpg",
      "asset/images/bopathela2.jpg"
    ],
    description: "Bopath Ella is one of Sri Lanka’s most enchanting waterfalls, located in the Ratnapura District near Kuruwita...",
    province: "Sabaragamuwa Province",
    district: "Rathnapura District",
    Location: "Near the village of Agalwatte, close to Kuruwita town, Ratnapura District, about 75 km from Colombo."
    
  },
  {
    name: "Duwili Waterfall",
    images: [
      "asset/images/Duwili.jpeg",
      "asset/images/Duwili1.jpeg",
      "asset/images/Duwili2.jpeg"
    ],
    description: "Duwili Ella Falls, also known as Walawe Ganga East Falls, is a spectacular 40-meter-high waterfall near Balangoda...",
    province: "Sabaragamuwa Province",
    district: "Rathnapura District",
    Location: "Near the village of Thanjantenna, approximately 4 km from Balangoda, in the Knuckles Mountain Range."
  }
];

// Generate Cards
function displayTourCards() {
  const container = document.getElementById("tourCards");
  if (!container) return;

  container.innerHTML = destinations.map(item => `
    <div class="col-12 col-md-6 col-lg-4 p-2" data-aos="fade-up">
      <div class="card h-100 shadow-lg">
        <img src="${item.images[0]}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title fw-bold text-center">${item.name}</h5>
          <button onclick="discoverPlace('${item.name}')" class="btn btn-primary w-100">Discover</button>
        </div>
      </div>
    </div>
  `).join("");
}

// Discover button
function discoverPlace(placeName) {
  const place = destinations.find(d => d.name === placeName);
  if (!place) { alert("Details not found"); return; }
  localStorage.setItem("selectedPlace", JSON.stringify(place));
  window.location.href = "details.html";
}

// Display details on details.html
function displayPlaceDetails() {
  const data = JSON.parse(localStorage.getItem("selectedPlace"));
  const container = document.getElementById("placeDetails");
  if (!container) return;

  if (!data) {
    container.innerHTML = `<p class="text-danger text-center">No place data found.</p>`;
    return;
  }

  container.innerHTML = `
    <div class="card shadow-lg mb-4" data-aos="fade-up">
      <img src="${data.images[0]}" class="card-img-top" alt="${data.name}">
      <div class="card-body">
        <h2 class="fw-bold">${data.name}</h2>
        <p>${data.description}</p>
        <p><strong>Province:</strong> ${data.province}</p>
        <p><strong>District:</strong> ${data.district}</p>
        <p><strong>Location:</strong> ${data.Location}</p>
      </div>
    </div>
    <div class="row mt-4">
      ${data.images.slice(1).map(img => `
        <div class="col-md-4 mb-3" data-aos="zoom-in">
          <img src="${img}" class="img-fluid rounded shadow-sm" alt="${data.name}">
        </div>
      `).join("")}
    </div>
  `;
}

// Run functions on page load
window.addEventListener("DOMContentLoaded", () => {
  displayTourCards();
  displayPlaceDetails();
});


















// Initialize EmailJS
emailjs.init("KZ1g9DJxg-CfhzacT"); // Replace with your EmailJS public key

// Form submission listener
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page refresh

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const country = document.getElementById("country").value.trim();
  const nationality = document.getElementById("nationality").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (!name || !email || !country || !nationality || !contact || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simple email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Contact number validation (digits only, optional length check)
  const contactPattern = /^\d+$/;
  if (!contactPattern.test(contact)) {
    alert("Please enter a valid contact number (digits only).");
    return;
  }

  // Add current time for {{time}} variable in template
  const now = new Date();
  const time = now.toLocaleString();

  // Prepare form data
  const formData = { name, email, country, nationality, contact, message, time };

  // Send data using EmailJS
  emailjs.send("service_81ibozh", "template_n5uvvs8", formData)
    .then(() => {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      alert("Failed to send message. Check console for details.");
      console.error("EmailJS Error:", error);
    });
});

