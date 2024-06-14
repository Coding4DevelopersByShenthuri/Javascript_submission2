function removeDuplicates(arr) {
    return [...new Set(arr)];
}

document.addEventListener("DOMContentLoaded", function() {
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `Output: ${removeDuplicates(numbers)}`;
});
