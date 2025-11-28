document.addEventListener("DOMContentLoaded", function() {
    const golfForm = document.getElementById("golfForm");
    if (golfForm) {
        golfForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Stop page reload

            const name = document.getElementById("golfName").value.trim();
            const email = document.getElementById("golfEmail").value.trim();
            const contact = document.getElementById("golfContact").value.trim();
            const date = document.getElementById("golfDate").value;
            const caddie = document.getElementById("golfCaddie").value;
            const notes = document.getElementById("golfMessage").value.trim();

            // Format date nicely
            const formattedDate = new Date(date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric"
            });

            // Build WhatsApp message
            let message = `🏌️‍♂️ Golf Booking Request\n\n`;
            message += `Full Name: ${name}\n`;
            message += `Email: ${email}\n`;
            message += `Contact: ${contact}\n`;
            message += `Preferred Date: ${formattedDate}\n`;
            message += `Caddie Service: ${caddie}\n`;
            if(notes) message += `Additional Notes: ${notes}\n`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappNumber = "94770132263";
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappURL, "_blank");

            // Clear the form fields
            golfForm.reset();
        });
    }
});


AOS.init();
 window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 2000); // 4 seconds
  });
  // only on home page
if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 6000);
  });
} else {
  document.body.classList.add("loaded"); 
}

// Tour Packages Data
const tourPackages = [
  {
    id: "10day",
    name: "🏝️ 10-Day Sri Lanka Adventure",
    images: [
      "assets/image/img4.jpg",
      "assets/image/img6.jpg",
      "assets/image/img10.jpg",
      "assets/image/room.jpg",
      "assets/image/img8.jpg"
    ],
    description: `
Embark on an unforgettable 10-day journey across Sri Lanka, blending golden beaches, cultural wonders, lush mountains, and thrilling adventures.

🌊 <b>Days 1–2: Galle / Mirissa</b>  
Relax on Polhena Beach, try surfing, snorkeling, or whale watching. Visit Coconut Hill & Parrot Rock.  
🏄‍♂️ Surfing | 🐋 Whale Watching | 🌅 Beach Sunset | 🏖️ 2 Nights Stay

🌴 <b>Days 3–4: Trincomalee / Arugam Bay</b>  
Discover pristine beaches and world-class surf spots. Perfect for sunbathing or catching waves.  
🌊 Surfing | 🐚 Relaxing at beach | 🛶 2 Nights Stay

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
    // province: "Central Province",
    // district: "Matale District",
    location: "Galle / Mirissa / Trincomalee / Arugam Bay / Sigiriya / Dambulla / Ella / Kandy"
  },
  {
    id: "15 days",
    name: "🌄 15-Day Cultural & Adventure Tour",
    images: [
      "assets/image/15day5.jpg",
      "assets/image/15day3.jpg",
      "assets/image/15day1.jpg",
      "assets/image/15day2.jpg",
      "assets/image/15day4.jpg"
    ],
    description: `🌊 Days 1 – 3: Unawatuna / Galle
Start your journey on the southern coast. Explore Galle Fort, relax at Polhena Beach, and visit Parrot Rock and Coconut Hill. Go whale watching or snorkel among coral gardens.
🏖 Relaxing at beach | 🐋 Whale Watching | 🏰 Galle Fort | 3 Nights Stay

🦁 Days 4 – 5: Kataragama / Yala National Park
Travel inland for an unforgettable wildlife safari in Yala National Park. Spot elephants, leopards, and exotic birds while enjoying a full-day safari with lunch.
🚙 Jeep Safari | 🐆 Wildlife Experience | 2 Nights Stay

🏄 Days 6 – 8: Arugam Bay
Head to Sri Lanka’s surf capital! Relax on Crocodile River Beach or catch the perfect wave. Ideal for beach lovers and surfers alike.
🌊 Surfing | 🐊 River Views | ☀️ 3 Nights Stay

🌿 Days 9 – 11: Ella
Discover the misty hills of Ella—hike to Ella Rock, Little Adam’s Peak, and the iconic Nine Arches Bridge. Don’t miss the Secret Waterfall.
🚶‍♀️ Hiking | 🌄 Scenic Views | 🌺 3 Nights Stay

🚂 Day 12: Train to Nuwara Eliya
Enjoy one of the world’s most beautiful train rides through lush tea plantations and mountain tunnels.
🍃 Tea Country Views | 🚆 Scenic Journey | 1 Night Stay

🏯 Days 13 – 14: Sigiriya / Cultural Triangle
Explore the ancient cities and sacred sites—Sigiriya Lion Rock, Pidurangala, Dambulla Cave Temple, and the ruins of Anuradhapura & Polonnaruwa.
🪔 Cultural Heritage | 🏯 Ancient Temples | 2 Nights Stay

🐘 Day 15: Negombo / Pinnawala Elephant Orphanage
Conclude your trip with a visit to Pinnawala to see rescued elephants, then relax by the Negombo beach before departure.
🐘 Elephant Encounter | 🏖 Farewell Beach | 1 Night Stay
`,
    // province: "Central Province",
    // district: "Matale District",
    location: "Galle / Kataragama / Arugambay / Ella / Sigiriya / Nuwara Eliya"
  },
  
];
// Generate Tour Cards
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
// Discover Button Functionality
function discoverPlace(id) {
  const place = tourPackages.find(d => d.id === id);
  if (!place) { alert("Details not found"); return; }
  localStorage.setItem("selectedPlace", JSON.stringify(place));
  window.location.href = "details.html";
}
// Display Details on details.html

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
// Run Functions on Page Load
window.addEventListener("DOMContentLoaded", () => {
  displayTourCards();
  displayPlaceDetails();
});
//  <p><strong>Province:</strong> ${data.province}</p>
//  <p><strong>District:</strong> ${data.district}</p>


//send message whatsapp tour packages details
//send message whatsapp tour packages details
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get all field values (IDs updated to match form)
  const name = document.getElementById("yourname").value.trim();
  const email = document.getElementById("youremail").value.trim();
  const packageSelected = document.getElementById("tourpackage").value.trim();
  const startDate = document.getElementById("tourstart_date").value.trim();
  const pickup = document.getElementById("tourpickup").value.trim();
  const nationality = document.getElementById("tournationality").value.trim(); // optional
  const contact = document.getElementById("tourcontact").value.trim();
  const adults = document.getElementById("touradults").value.trim();
  const children = document.getElementById("tourchildren").value.trim();
  const message = document.getElementById("tourmessage").value.trim();

  // Validate fields (nationality removed)
  if (!name || !email || !packageSelected || !startDate || !pickup || !contact || !adults || children === "" || !message) {
    showAlert("⚠️ Please fill out all required fields!", "danger");
    return;
  }

  // WhatsApp number
  const phoneNumber = "94770132263";

  // Format WhatsApp message (Nationality optional)
  const whatsappMessage = 
`🌍 *New Tour Booking Request*
------------------------------------
👤 *Name:* ${name}
📧 *Email:* ${email}
📦 *Package:* ${packageSelected}
📅 *Start Date:* ${startDate}
📍 *Pickup Location:* ${pickup}
${nationality ? `🏳️ *Nationality:* ${nationality}\n` : ""}📞 *Contact:* ${contact}
🧑 *Adults:* ${adults}
🧒 *Children:* ${children}
💬 *Message:* ${message}
------------------------------------
Sent from the tour website.`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  showAlert("✅ Message ready! Redirecting to WhatsApp...", "success");

  setTimeout(() => {
    window.open(whatsappURL, "_blank");
    document.getElementById("contactForm").reset();
  }, 1500);
});

// Function to show alert messages
function showAlert(message, type) {
  const oldAlert = document.querySelector(".alert-msg");
  if (oldAlert) oldAlert.remove();

  const alertBox = document.createElement("div");
  alertBox.className = `alert-msg alert alert-${type} text-center fw-semibold`;
  alertBox.textContent = message;

  const form = document.getElementById("contactForm");
  form.parentNode.insertBefore(alertBox, form);

  setTimeout(() => alertBox.remove(), 4000);
}

  
// Initialize EmailJS
emailjs.init("fzue2eKgVMc8T_lfe"); // Replace with your EmailJS public key

// Form submission listener
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page refresh

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const country = document.getElementById("country").value.trim();
  const nationality = document.getElementById("nationality").value.trim(); // Optional
  const contact = document.getElementById("contact").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation (Nationality removed)
  if (!name || !email || !country || !contact || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Simple email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Add current time
  const now = new Date();
  const time = now.toLocaleString();

  // Prepare form data
  const formData = { name, email, country, nationality, contact, message, time };

  // Send data using EmailJS
  emailjs.send("service_nrqdhv8", "template_f44jb8i", formData)
    .then(() => {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      alert("Failed to send message. Check console for details.");
      console.error("EmailJS Error:", error);
    });
});


document.getElementById("golfForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop the form from submitting normally

    // Get form values
    const name = document.getElementById("golfName").value.trim();
    const email = document.getElementById("golfEmail").value.trim();
    const contact = document.getElementById("golfContact").value.trim();
    const date = document.getElementById("golfDate").value;
    const caddie = document.getElementById("golfCaddie").value;
    const notes = document.getElementById("golfMessage").value.trim();

    // Create WhatsApp message
    let whatsappMessage = `🏌️‍♂️ Golf Booking Request\n\n`;
    whatsappMessage += `Full Name: ${name}\n`;
    whatsappMessage += `Email: ${email}\n`;
    whatsappMessage += `Contact: ${contact}\n`;
    whatsappMessage += `Preferred Date: ${date}\n`;
    whatsappMessage += `Caddie Service: ${caddie}\n`;
    if(notes) {
        whatsappMessage += `Additional Notes: ${notes}\n`;
    }

    // Encode message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp link (replace with your number)
    const whatsappURL = `https://wa.me/94770132263?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
});
