const properties = [
  {
    id: 1,
    type: "apartment",
    title: "2 BHK Apartment in Hyderabad",
    price: "₹35 Lakhs",
    location: "Hyderabad",
    image: "https://source.unsplash.com/400x300/?apartment,building"
  },
  {
    id: 2,
    type: "villa",
    title: "Luxury Villa in Bangalore",
    price: "₹1.2 Crore",
    location: "Bangalore",
    image: "https://source.unsplash.com/400x300/?villa,house"
  },
  {
    id: 3,
    type: "plot",
    title: "Residential Plot in Chennai",
    price: "₹50 Lakhs",
    location: "Chennai",
    image: "https://source.unsplash.com/400x300/?land,plot"
  },
  {
    id: 4,
    type: "apartment",
    title: "1 BHK Apartment in Mumbai",
    price: "₹25 Lakhs",
    location: "Mumbai",
    image: "https://source.unsplash.com/400x300/?apartment,home"
  }
];

// Display all properties
function displayProperties(list) {
  const container = document.getElementById("property-list");
  container.innerHTML = "";
  list.forEach(prop => {
    container.innerHTML += `
      <div class="property-card">
        <img src="${prop.image}" alt="${prop.title}">
        <div class="property-info">
          <h3>${prop.title}</h3>
          <p><b>Price:</b> ${prop.price}</p>
          <p><b>Location:</b> ${prop.location}</p>
          <p><b>Type:</b> ${prop.type.charAt(0).toUpperCase() + prop.type.slice(1)}</p>
        </div>
      </div>
    `;
  });
}

// Filter by property type
function filterProperties() {
  const type = document.getElementById("typeFilter").value;
  if (type === "all") {
    displayProperties(properties);
  } else {
    const filtered = properties.filter(p => p.type === type);
    displayProperties(filtered);
  }
}

// Search by location
function searchProperties() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = properties.filter(p => p.location.toLowerCase().includes(query));
  displayProperties(filtered);
}

// Load all properties on page load
window.onload = () => displayProperties(properties);
