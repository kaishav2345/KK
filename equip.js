document.getElementById("user-role").addEventListener("change", function() {
    const role = this.value;
    document.getElementById("buyer-section").style.display = role === "user" ? "block" : "none";
    document.getElementById("admin-section").style.display = role === "admin" ? "block" : "none";
});

// Sample Equipment Listings
const equipmentList = [
    { name: "Tractor", price: 500000 },
    { name: "Irrigation System", price: 100000 },
    { name: "Plow", price: 20000 }
];

function displayEquipment() {
    const buyerList = document.getElementById("equipment-list");
    buyerList.innerHTML = "";
    equipmentList.forEach((item, index) => {
        buyerList.innerHTML += `<li>${item.name} - ₹${item.price} <button onclick="buyEquipment(${index})">Buy</button></li>`;
    });

    const adminList = document.getElementById("admin-equipment-list");
    adminList.innerHTML = "";
    equipmentList.forEach((item, index) => {
        adminList.innerHTML += `<li>${item.name} - ₹${item.price} <button onclick="removeEquipment(${index})">Remove</button></li>`;
    });
}

function addEquipment() {
    const name = document.getElementById("equipment-name").value.trim();
    const price = document.getElementById("equipment-price").value.trim();
    if (name && price) {
        equipmentList.push({ name, price });
        alert("Equipment added successfully!");
        displayEquipment();
    } else {
        alert("Please enter equipment name and price.");
    }
}

function buyEquipment(index) {
    alert(`You have bought ${equipmentList[index].name} for ₹${equipmentList[index].price}`);
}

function removeEquipment(index) {
    equipmentList.splice(index, 1);
    alert("Equipment removed.");
    displayEquipment();
}


// Initial Setup
displayEquipment();
