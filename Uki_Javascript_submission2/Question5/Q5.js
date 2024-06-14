function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

document.addEventListener("DOMContentLoaded", function() {
    const outputDiv = document.getElementById("output");
    const birthdate = "1990-06-15";
    const age = calculateAge(birthdate);
    outputDiv.textContent = `Age: ${age}`;
});
