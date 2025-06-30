const products = [
  // Footwear
  { name: "Red Sneakers", category: "footwear", price: 1499, rating: 4.8, image: "https://cdn-images.farfetch-contents.com/19/55/44/21/19554421_43605400_1000.jpg" },
  { name: "Running Shoes", category: "footwear", price: 2499, rating: 4.5, image: "https://tse4.mm.bing.net/th/id/OIP.UStLhwOQ-sWNpSBuiNIo1gHaHa?pid=Api&P=0&h=180" },
  { name: "Sports Shoes", category: "footwear", price: 1999, rating: 4.6, image: "https://tse2.mm.bing.net/th/id/OIP.rvG4MfLc303wGXwH4h9s2gHaE8?pid=Api&P=0&h=180" },
  { name: "Casual Loafers", category: "footwear", price: 1299, rating: 4.2, image: "https://tse2.mm.bing.net/th/id/OIP.T60J2A0xUrncJ5oTVngqkQHaGL?pid=Api&P=0&h=180" },
  { name: "Formal Shoes", category: "footwear", price: 1799, rating: 4.3, image: "https://tse4.mm.bing.net/th/id/OIP.2VzKYSe-39BAI_wHVMnFiAHaGY?pid=Api&P=0&h=180" },

  // Clothing
  { name: "Casual T-Shirt", category: "clothing", price: 799, rating: 4.4, image: "https://tse1.mm.bing.net/th/id/OIP.fDz0I-aiG3lQCO0bCGGFMwHaJ-?pid=Api&P=0&h=180" },
  { name: "Denim Jacket", category: "clothing", price: 1999, rating: 4.7, image: "https://tse4.mm.bing.net/th/id/OIP.jEgjpj2vXQSQaJY1kbH7wgHaJp?pid=Api&P=0&h=180" },
  { name: "Formal Shirt", category: "clothing", price: 999, rating: 4.1, image: "https://tse2.mm.bing.net/th/id/OIP.6XOOzJSVcxtMvcEWrsWV4QHaJk?pid=Api&P=0&h=180" },
  { name: "Hoodie", category: "clothing", price: 1499, rating: 4.5, image: "https://tse1.mm.bing.net/th/id/OIP.CKOsLl3IcE-COdxFZQs5MAHaKB?pid=Api&P=0&h=180" },
  { name: "Jeans", category: "clothing", price: 1299, rating: 4.3, image: "https://tse2.mm.bing.net/th/id/OIP.bNTYN5pE-eMjpUe7waHGlAHaJc?pid=Api&P=0&h=180" },

  // Accessories
  { name: "Stylish Wallet", category: "accessories", price: 599, rating: 4.4, image: "https://i5.walmartimages.com/asr/732daf6a-8707-464d-937f-7b371cfa0fa4_1.b00ddeea266c0c4ed807a7bc878a899e.jpeg" },
  { name: "Leather Belt", category: "accessories", price: 499, rating: 4.2, image: "https://i5.walmartimages.com/asr/22692be6-6457-41ed-b483-07471d671ea6_2.76fb76cd6b9f010ae762e7acccc2e597.jpeg" },
  { name: "Sunglasses", category: "accessories", price: 799, rating: 4.6, image: "https://tse4.mm.bing.net/th/id/OIP.XrG4925fPGIRJ_BV6y_hhAHaE8?pid=Api&P=0&h=180" },
  { name: "Backpack", category: "accessories", price: 1299, rating: 4.7, image: "https://tse3.mm.bing.net/th/id/OIF.UvKFxeRHNGlJVfFjoPupsQ?pid=Api&P=0&h=180" },
  { name: "Cap", category: "accessories", price: 399, rating: 4.1, image: "https://tse3.mm.bing.net/th/id/OIP.VuZMDZiwTFxHY5ry5kxnNQHaE8?pid=Api&P=0&h=180" },

  // Electronics
  { name: "Smart Watch", category: "electronics", price: 3499, rating: 4.8, image: "https://tse4.mm.bing.net/th/id/OIP.TizsuSGIqpv_4g8ZgDV_AwHaIz?pid=Api&P=0&h=180" },
  { name: "Bluetooth Earbuds", category: "electronics", price: 2999, rating: 4.6, image: "https://tse4.mm.bing.net/th/id/OIP.IRT35QUZe9DGnZ6Jo_mKFAHaHa?pid=Api&P=0&h=180" },
  { name: "Wireless Headphones", category: "electronics", price: 3999, rating: 4.5, image: "https://tse4.mm.bing.net/th/id/OIP.RZjRvaO9IfDAwpD20I7e5wHaHa?pid=Api&P=0&h=180" },
  { name: "Portable Speaker", category: "electronics", price: 2499, rating: 4.4, image: "https://tse2.mm.bing.net/th/id/OIP.aEydw2K6eGBQEA0kVZbhPwHaGO?pid=Api&P=0&h=180" },
  { name: "Fitness Band", category: "electronics", price: 1999, rating: 4.3, image: "https://functionalfitnessbands.com/wp-content/uploads/2022/05/FF-PU-all8-1536x1536.jpg" },
  { name: "Tablet", category: "electronics", price: 8999, rating: 4.7, image: "https://tse3.mm.bing.net/th/id/OIP.4HPf4W-DTROWix5rikTzqwHaEr?pid=Api&P=0&h=180" },
  { name: "Gaming Mouse", category: "electronics", price: 999, rating: 4.2, image: "https://m.media-amazon.com/images/I/61QY3V6A-NL.jpg" },
  { name: "Laptop Sleeve", category: "electronics", price: 799, rating: 4.1, image: "https://tse4.mm.bing.net/th/id/OIP.CaN-b4s0rBrFryq5MrTIMQHaHa?pid=Api&P=0&h=180" },
  { name: "Wireless Charger", category: "electronics", price: 1299, rating: 4.4, image: "https://tse4.mm.bing.net/th/id/OIP.Mo87yJvoHUmkSOla24EGnAHaE7?pid=Api&P=0&h=180" },
  { name: "VR Headset", category: "electronics", price: 5999, rating: 4.6, image: "https://tse4.mm.bing.net/th/id/OIP.qG1wPUhTqqAs1UZelNT9hAHaFD?pid=Api&P=0&h=180" },
];

const productContainer = document.getElementById("product-container");
const categoryButtons = document.querySelectorAll(".category-filters button");
const sortSelect = document.getElementById("sortBy");
const cartElement = document.querySelector(".cart");

let selectedCategory = "all";
let selectedSort = "default";
let cartCount = 0;

function renderProducts() {
  let filtered = products;

  if (selectedCategory !== "all") {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (selectedSort === "price-low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-high-low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "rating-high-low") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  productContainer.innerHTML = "";

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-category">${p.category}</div>
      <img src="${p.image}" alt="${p.name}" />
      <div class="product-name">${p.name}</div>
      <div class="product-price">₹${p.price}</div>
      <div class="rating">⭐ ${p.rating.toFixed(1)}</div>
      <button class="add-cart-btn">Add to Cart</button>
    `;
    card.querySelector(".add-cart-btn").addEventListener("click", () => {
      cartCount++;
      cartElement.textContent = `Cart (${cartCount})`;
      alert(`Added ${p.name} to cart!`);
    });
    productContainer.appendChild(card);
  });
}

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCategory = btn.dataset.category;
    renderProducts();
  });
});

sortSelect.addEventListener("change", () => {
  selectedSort = sortSelect.value;
  renderProducts();
});

renderProducts();