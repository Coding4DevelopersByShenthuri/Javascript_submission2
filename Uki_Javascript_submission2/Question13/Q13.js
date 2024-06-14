function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    
    let intersectionSet = new Set();
    
    for (let item of set1) {
        if (set2.has(item)) {
            intersectionSet.add(item);
        }
    }
    
    return Array.from(intersectionSet);
}

document.addEventListener("DOMContentLoaded", function() {
    let array1 = [1, 2, 3, 4];
    let array2 = [3, 4, 5, 6];
    let outputDiv = document.getElementById("output");
    outputDiv.textContent = `Output: ${intersection(array1, array2)}`;
});
