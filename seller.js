document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("product-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("product-name").value.trim();
        const price = document.getElementById("product-price").value.trim();
        const contact = document.getElementById("seller-contact").value.trim();
        const imageFile = document.getElementById("product-image").files[0];
        
        if (!name || !price || !contact || !imageFile) {
            alert("Please fill all fields!");
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;
            const newProduct = { name, price, contact, imageUrl };
            addProductToList(newProduct);
        };
        
        reader.readAsDataURL(imageFile);
        document.getElementById("product-form").reset();
    });
});

function addProductToList(product) {
    const list = document.getElementById("seller-product-list");
    const item = document.createElement("li");
    item.classList.add("product-item");
    item.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
        <div class="product-details">
            <strong>${product.name}</strong>
            <p>Price: ₹${product.price} per kg</p>
            <p>Contact: ${product.contact}</p>
        </div>
    `;
    list.appendChild(item);
}
