function addDays(dateString, days) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
}

document.addEventListener("DOMContentLoaded", function() {
    const outputDiv = document.getElementById("output");
    const inputDate = "2022-06-15";
    const daysToAdd = 10;
    const newDate = addDays(inputDate, daysToAdd);
    outputDiv.textContent = `New Date after adding ${daysToAdd} days: ${newDate}`;
});
