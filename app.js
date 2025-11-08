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
