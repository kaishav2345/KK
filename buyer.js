let crops = [
    { name: "Wheat", price: 25, image: "wheat.jpg" },
    { name: "Carrot", price: 40, image: "carrot.webp" },
    { name: "Maize", price: 20, image: "maize.webp" }
];

function displayCrops() {
    let list = document.getElementById("product-list");
    list.innerHTML = "";
    crops.forEach((crop, index) => {
        let item = document.createElement("div");
        item.classList.add("product");
        item.innerHTML = `
            <img src="${crop.image}" alt="${crop.name}">
            <h3>${crop.name}</h3>
            <p>Price: ₹${crop.price} per kg</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        list.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", displayCrops);

let cart = [];
function addToCart(index) {
    cart.push(crops[index]);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cart.forEach((item, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${i})">Remove</button>`;
        cartList.appendChild(li);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function searchCrops() {
    let input = document.getElementById("search-bar").value.toLowerCase();
    let filteredCrops = crops.filter(crop => crop.name.toLowerCase().includes(input));
    let list = document.getElementById("product-list");
    list.innerHTML = "";
    filteredCrops.forEach((crop, index) => {
        let item = document.createElement("div");
        item.classList.add("product");
        item.innerHTML = `
            <img src="${crop.image}" alt="${crop.name}">
            <h3>${crop.name}</h3>
            <p>Price: ₹${crop.price} per kg</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        list.appendChild(item);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout!");
        cart = [];
        updateCart();
    }
}
