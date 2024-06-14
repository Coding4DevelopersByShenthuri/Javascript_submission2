function dateDifference(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}

document.addEventListener("DOMContentLoaded", function() {
    const outputDiv = document.getElementById("output");
    const date1 = "2022-06-15";
    const date2 = "2023-06-15";
    const difference = dateDifference(date1, date2);
    outputDiv.textContent = `Number of days between ${date1} and ${date2}: ${difference}`;
});
