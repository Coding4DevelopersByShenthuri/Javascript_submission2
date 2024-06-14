function getCurrentDateTime() {
    let now = new Date();
    
    let year = now.getFullYear();
    let month = padZero(now.getMonth() + 1); // Months are zero-based
    let day = padZero(now.getDate());
    let hours = padZero(now.getHours());
    let minutes = padZero(now.getMinutes());
    let seconds = padZero(now.getSeconds());
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function padZero(value) {
    return value < 10 ? '0' + value : value;
}

document.addEventListener("DOMContentLoaded", function() {
    let outputDiv = document.getElementById("output");
    let currentDateTime = getCurrentDateTime();
    outputDiv.textContent = "Current Date and Time: " + currentDateTime;
});
