AOS.init();

// ============================
// Tour Packages Data
// ============================
const tourPackages = [
  {
    id: "10day",
    name: "🏝️ 10-Day Sri Lanka Adventure",
    images: [
      "assets/image/img4.jpg",
      "assets/image/img6.jpg",
      "assets/image/img10.jpg",
      "assets/image/img6.jpg",
      "assets/image/img10.jpg"
    ],
    description: `
Embark on an unforgettable 10-day journey across Sri Lanka, blending golden beaches, cultural wonders, lush mountains, and thrilling adventures.

🌊 <b>Days 1–2: Galle / Mirissa</b>  
Relax on Polhena Beach, try surfing, snorkeling, or whale watching. Visit Coconut Hill & Parrot Rock.  
🏄‍♂️ Surf | 🐋 Whale Watching | 🌅 Beach Sunset | 🏖️ 2 Nights Stay

🌴 <b>Days 3–4: Trincomalee / Arugam Bay</b>  
Discover pristine beaches and world-class surf spots. Perfect for sunbathing or catching waves.  
🌊 Surfing | 🐚 Beach Relaxation | 🛶 2 Nights Stay

🏰 <b>Days 5–6: Sigiriya / Dambulla</b>  
Climb Sigiriya Lion Rock, explore Pidurangala Rock & Dambulla cave temples. Immerse in Sri Lanka’s cultural triangle.  
🏯 Ancient Cities | 🪔 Temples | 🌄 2 Nights Stay

🌿 <b>Days 7–8: Ella</b>  
Hike Little Adam’s Peak, visit Nine Arches Bridge & Secret Waterfall, and enjoy panoramic views from Ella Rock.  
🚶‍♀️ Hiking | 🌿 Waterfalls | 🚂 Scenic Beauty | 🏡 2 Nights Stay

🚆 <b>Day 9: Kandy</b>  
Take a scenic train ride to Kandy. Visit the Temple of the Tooth & stroll around Kandy Lake.  
🏯 Temple Visit | 🌸 Cultural Experience | 1 Night Stay

✈️ <b>Day 10: Departure</b>  
Return home with memories of Sri Lanka’s diverse beauty and warm hospitality.
    `,
    province: "Central Province",
    district: "Matale District",
    location: "Galle / Mirissa / Trincomalee / Arugam Bay / Sigiriya / Dambulla / Ella / Kandy"
  },
  {
    id: "7day",
    name: "🌄 7-Day Cultural & Adventure Tour",
    images: [
      "assets/image/img7.jpg",
      "assets/image/img8.jpg",
      "assets/image/img9.jpg",
       "assets/image/img8.jpg",
      "assets/image/img9.jpg"
    ],
    description: `
Explore Sri Lanka’s cultural treasures and natural beauty in 7 days.

🏖️ <b>Days 1–2: South Coast</b>  
Relax at Mirissa & Galle, enjoy beaches, surfing & whale watching.

🏰 <b>Days 3–4: Sigiriya & Dambulla</b>  
Climb the Lion Rock & visit ancient cave temples.

🌿 <b>Days 5–6: Kandy & Nuwara Eliya</b>  
Temple of the Tooth, scenic train ride, tea plantations & waterfalls.

🚗 <b>Day 7: Departure</b>  
Return home with unforgettable memories.
    `,
    province: "Central Province",
    district: "Matale District",
    location: "Mirissa / Galle / Sigiriya / Dambulla / Kandy / Nuwara Eliya"
  }
];

// ============================
// Generate Tour Cards
// ============================
function displayTourCards() {
  const container = document.getElementById("tourCards");
  if (!container) return;

  container.innerHTML = tourPackages.map(item => `
    <div class="col-12 col-md-6 col-lg-4 p-2" data-aos="fade-up">
      <div class="card h-100 shadow-lg border-0">
        <img src="${item.images[0]}" class="card-img-top rounded-top" alt="${item.name}">
        <div class="card-body text-center">
          <h5 class="card-title fw-bold">${item.name}</h5>
          <p class="text-muted">Locations: ${item.location}</p>
          <button onclick="discoverPlace('${item.id}')" class="btn btn-primary w-100 fw-bold">Discover</button>
        </div>
      </div>
    </div>
  `).join("");
}

// ============================
// Discover Button Functionality
// ============================
function discoverPlace(id) {
  const place = tourPackages.find(d => d.id === id);
  if (!place) { alert("Details not found"); return; }
  localStorage.setItem("selectedPlace", JSON.stringify(place));
  window.location.href = "details.html";
}

// ============================
// Display Details on details.html
// ============================
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
    <img src="${data.images[0]}" class="card-img-top rounded" alt="${data.name}">
    <div class="card-body">
      <h2 class="fw-bold mb-3 text-center">${data.name}</h2>

      <div class="mb-3">
        <p><strong>Province:</strong> ${data.province}</p>
        <p><strong>District:</strong> ${data.district}</p>
        <p><strong>Locations:</strong> ${data.location}</p>
      </div>

      <hr>

      <div class="tour-itinerary">
        ${data.description
          .split("\n\n")
          .map(section => `
            <div class="mb-4">
              <p class="mb-1">${section}</p>
            </div>
          `).join("")}
      </div>
    </div>
  </div>

  <div class="row mt-4">
    ${data.images.slice(1).map(img => `
      <div class="col-md-6 mb-3" data-aos="zoom-in">
        <div class="card h-100 shadow-sm">
          <img src="${img}" class="img-fluid rounded" style="width:100%; height:300px; object-fit:cover;" alt="${data.name}">
        </div>
      </div>
    `).join("")}
  </div>
`;
}

// ============================
// Run Functions on Page Load
// ============================
window.addEventListener("DOMContentLoaded", () => {
  displayTourCards();
  displayPlaceDetails();
});


//send message whatsapp tour packges details


document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload

  // Get all field values
  const name = document.getElementById("yourname").value.trim();
  const email = document.getElementById("youremail").value.trim();
  const packageSelected = document.getElementById("tourpackage").value.trim();
  const startDate = document.getElementById("tourstart_date").value.trim();
  const pickup = document.getElementById("tourpickup").value.trim();
  const nationality = document.getElementById("tournationality").value.trim();
  const contact = document.getElementById("tourcontact").value.trim();
  const adults = document.getElementById("touradults").value.trim();
  const children = document.getElementById("tourchildren").value.trim();
  const message = document.getElementById("tourmessage").value.trim();

  // Validate fields
  if (!name || !email || !packageSelected || !startDate || !pickup || !nationality || !contact || !adults || !children || !message) {
    showAlert("⚠️ Please fill out all required fields!", "danger");
    return;
  }

  // ✅ Your WhatsApp number (no + or spaces)
  const phoneNumber = "94740409486";

  // Format WhatsApp message
  const whatsappMessage =
    `🌍 *New Tour Booking Request*
------------------------------------
👤 *Name:* ${name}
📧 *Email:* ${email}
📦 *Package:* ${packageSelected}
📅 *Start Date:* ${startDate}
📍 *Pickup Location:* ${pickup}
🌎 *Nationality:* ${nationality}
📞 *Contact:* ${contact}
🧍 *Adults:* ${adults}
👶 *Children:* ${children}
💬 *Message:* ${message}
------------------------------------
Sent from the tour website.`;

  // Encode and open WhatsApp
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Show success message
  showAlert("✅ Message ready! Redirecting to WhatsApp...", "success");

  // Wait before opening WhatsApp
  setTimeout(() => {
    window.open(whatsappURL, "_blank");
    document.getElementById("contactForm").reset();
  }, 1500);
});

// Function to show alert messages
function showAlert(message, type) {
  // Remove any existing alert
  const oldAlert = document.querySelector(".alert-msg");
  if (oldAlert) oldAlert.remove();

  // Create alert box
  const alertBox = document.createElement("div");
  alertBox.className = `alert-msg alert alert-${type} text-center fw-semibold`;
  alertBox.textContent = message;

  // Insert alert above form
  const form = document.getElementById("contactForm");
  form.parentNode.insertBefore(alertBox, form);

  // Remove after 4 seconds
  setTimeout(() => alertBox.remove(), 4000);
}

















// Initialize EmailJS
emailjs.init("KZ1g9DJxg-CfhzacT"); // Replace with your EmailJS public key

// Form submission listener
document.getElementById("contactForm").addEventListener("submit", function (e) {
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

