let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
];

function checkDuplicates(classes) {
    let nameSet = new Set();

    for (let classArray of classes) {
        for (let name of classArray) {
            if (nameSet.has(name)) {
                return true; // If a duplicate is found, return true
            }
            nameSet.add(name);
        }
    }

    return false; // If no duplicates are found, return false
}

document.addEventListener("DOMContentLoaded", function() {
    let outputDiv = document.getElementById("output");
    let hasDuplicates = checkDuplicates(classes);

    let outputText = hasDuplicates ? "There are duplicate names." : "There are no duplicate names.";
    outputDiv.textContent = outputText;
});
