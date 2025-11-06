const tours = [
  { date: "Nov 14, 2025", venue: "The Grand Ole Opry", city: "Nashville, TN" },
  { date: "Jan 23, 2026", venue: "Coca-Cola Arena", city: "Dubai, UAE" },
  { date: "Jan 24–25, 2026", venue: "Lollapalooza India", city: "Mumbai, India" },
  { date: "Apr 3, 2026", venue: "Bill Graham Civic Auditorium", city: "San Francisco, CA" },
  { date: "Apr 4, 2026", venue: "Intuit Dome", city: "Los Angeles, CA" },
  { date: "Apr 10, 2026", venue: "Roadrunner", city: "Boston, MA" },
  { date: "Apr 11, 2026", venue: "Barclays Center", city: "Brooklyn, NY" },
  { date: "Apr 17, 2026", venue: "Credit Union 1 Arena", city: "Chicago, IL" },
  { date: "Apr 22, 2026", venue: "Coca-Cola Roxy", city: "Atlanta, GA" },
  { date: "May 30, 2026", venue: "013 Poppodium", city: "Tilburg, Netherlands" },
  { date: "Jun 6, 2026", venue: "OVO Arena Wembley", city: "London, UK" },
];

const tourGrid = document.getElementById("tourGrid");
tours.forEach(t => {
  const card = document.createElement("div");
  card.classList.add("tour-card");
  card.innerHTML = `
    <h3>${t.date}</h3>
    <p>${t.venue}</p>
    <p>${t.city}</p>
  `;
  tourGrid.appendChild(card);
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const city = document.getElementById("city").value.trim();
  const tickets = document.getElementById("tickets").value;
  const payment = document.getElementById("payment").value;

  if (!name || !email || !city || !tickets || !payment) {
    alert("Please fill out all fields before submitting!");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  alert(`Thank you, ${name}! Your registration has been submitted successfully.`);
  this.reset();
});