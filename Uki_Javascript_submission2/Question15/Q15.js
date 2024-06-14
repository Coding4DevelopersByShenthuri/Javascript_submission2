function removeItemsFromSet(items, set) {
    items.forEach(item => {
        set.delete(item);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    let mySet = new Set([1, 2, 3, 4, 5]);
    let itemsToRemove = [2, 3];
    removeItemsFromSet(itemsToRemove, mySet);
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `[...mySet]: ${[...mySet]}`; // Convert the set to an array and display it
});
