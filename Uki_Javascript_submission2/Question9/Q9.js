function countOccurrences(arr) {
    let occurrencesMap = new Map();
    arr.forEach(item => {
        if (occurrencesMap.has(item)) {
            occurrencesMap.set(item, occurrencesMap.get(item) + 1);
        } else {
            occurrencesMap.set(item, 1);
        }
    });
    return occurrencesMap;
}

document.addEventListener("DOMContentLoaded", function() {
    const strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
    const outputDiv = document.getElementById("output");
    const occurrencesMap = countOccurrences(strings);

    let outputHtml = "Map { ";
    occurrencesMap.forEach((value, key) => {
        outputHtml += `'${key}' => ${value}, `;
    });
    outputHtml = outputHtml.slice(0, -2); // Remove the trailing comma and space
    outputHtml += " }";

    outputDiv.textContent = outputHtml;
});
