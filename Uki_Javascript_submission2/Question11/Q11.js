let inventory = new Map();

function addItem(itemName, quantity) {
    inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
    if (inventory.has(itemName)) {
        inventory.set(itemName, quantity);
    } else {
        console.log("Item not found");
    }
}

function checkItemQuantity(itemName) {
    if (inventory.has(itemName)) {
        return inventory.get(itemName);
    } else {
        console.log("Item not found");
        return null;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    addItem("apple", 100);
    addItem("banana", 150);
    updateItemQuantity("apple", 50);

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>Quantity of apples: ${checkItemQuantity("apple")}</p>`;
    outputDiv.innerHTML += `<p>Quantity of bananas: ${checkItemQuantity("banana")}</p>`;
});
