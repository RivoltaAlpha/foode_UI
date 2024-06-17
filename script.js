// script.js

// Function to fetch data from JSON file
async function fetchMenuItems() {
  try {
      const response = await fetch('available-meals.json'); // Replace with your JSON file path
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Function to display menu items in the DOM
async function displayMenu() {
  const foodListContainer = document.getElementById('food-list');
  const menuItems = await fetchMenuItems();


  // Loop through each menu item and create HTML elements
  menuItems.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
          <img class="image" src="${item.image}" alt="${item.name}">
          <h2>${item.name}</h2>
          <button style="background-color:#333; color:#ffaa00">$${item.price}</button>
          <p>${item.description}</p>
          <button>Add to cart</button>
      `;

      foodListContainer.appendChild(card);
  });
}
window.onload = displayMenu;
