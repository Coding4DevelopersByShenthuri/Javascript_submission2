let userPreferences = new Map();

function setPreference(key, value) {
    userPreferences.set(key, value);
}

function getPreference(key) {
    return userPreferences.get(key);
}

// Set preferences
setPreference("theme", "dark");
setPreference("fontSize", "16px");

// Display preferences
console.log(getPreference("theme")); // Output: dark
console.log(getPreference("fontSize")); // Output: 16px

// Display preferences in the HTML page
document.addEventListener("DOMContentLoaded", function() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>Theme: ${getPreference("theme")}</p>`;
    outputDiv.innerHTML += `<p>Font Size: ${getPreference("fontSize")}</p>`;
});
