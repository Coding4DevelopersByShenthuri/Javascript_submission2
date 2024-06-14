let employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
];

let ageLimit = 30;

function filterEmployees(employees, ageLimit) {
    return employees.filter(employee => employee.age <= ageLimit);
}

document.addEventListener("DOMContentLoaded", function() {
    let filteredEmployees = filterEmployees(employees, ageLimit);
    let employeeList = document.getElementById("employeeList");

    filteredEmployees.forEach(function(employee) {
        let listItem = document.createElement("li");
        listItem.textContent = `${employee.name} - ${employee.age} years old`;
        employeeList.appendChild(listItem);
    });
});
