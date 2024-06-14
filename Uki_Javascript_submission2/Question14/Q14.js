function union(...arrays) {
    let resultSet = new Set();
    arrays.forEach(array => {
        array.forEach(item => {
            resultSet.add(item);
        });
    });
    return Array.from(resultSet);
}

function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let intersectionSet = new Set();
    set1.forEach(item => {
        if (set2.has(item)) {
            intersectionSet.add(item);
        }
    });
    return Array.from(intersectionSet);
}

document.addEventListener("DOMContentLoaded", function() {
    const array1 = [1, 2, 3];
    const array2 = [3, 4, 5];
    const array3 = [5, 6, 7];

    const outputDiv = document.getElementById("output");
    
    // Union
    const unionResult = union(array1, array2, array3);
    outputDiv.innerHTML += `<p>Union: ${unionResult}</p>`;
    
    // Intersection
    const array4 = [1, 2, 3, 4];
    const array5 = [3, 4, 5, 6];
    const intersectionResult = intersection(array4, array5);
    outputDiv.innerHTML += `<p>Intersection: ${intersectionResult}</p>`;
});
