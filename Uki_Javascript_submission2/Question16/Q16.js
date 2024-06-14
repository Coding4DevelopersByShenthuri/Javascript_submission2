function updateAttendance(newAttendance, overallAttendance) {
    newAttendance.forEach(student => {
        overallAttendance.add(student);
    });
    return overallAttendance;
}

document.addEventListener("DOMContentLoaded", function() {
    let overallAttendance = new Set(["Alice", "Bob"]);
    let todayAttendance = ["Charlie", "Alice"];
    overallAttendance = updateAttendance(todayAttendance, overallAttendance);
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `[...overallAttendance]: ${[...overallAttendance]}`;
});
