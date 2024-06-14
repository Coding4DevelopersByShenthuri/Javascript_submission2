function mapEmployeeIdsToNames(employees) {
    let employeeMap = new Map();
    employees.forEach(employee => {
        employeeMap.set(employee.id, employee.name);
    });
    return employeeMap;
}

document.addEventListener("DOMContentLoaded", function() {
    const employees = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ];
    const outputDiv = document.getElementById("output");
    const employeeMap = mapEmployeeIdsToNames(employees);

    let outputHtml = "Map { ";
    employeeMap.forEach((value, key) => {
        outputHtml += `${key} => '${value}', `;
    });
    outputHtml = outputHtml.slice(0, -2); // Remove the trailing comma and space
    outputHtml += " }";

    outputDiv.textContent = outputHtml;
});
