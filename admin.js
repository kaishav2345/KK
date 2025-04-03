document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    // Sample Data (To be replaced with backend integration)
    let products = [
        { id: 1, name: "Wheat", price: 50, contact: "1234567890" },
        { id: 2, name: "Carrot", price: 30, contact: "9876543210" }
    ];

    function renderProducts() {
        productList.innerHTML = "";
        products.forEach(product => {
            let li = document.createElement("li");
            li.innerHTML = `
                <span><strong>${product.name}</strong> - ₹${product.price} per kg | Contact: ${product.contact}</span>
                <button onclick="deleteProduct(${product.id})">Delete</button>
            `;
            productList.appendChild(li);
        });
    }

    window.deleteProduct = function(id) {
        products = products.filter(product => product.id !== id);
        renderProducts();
    };

    renderProducts();
});