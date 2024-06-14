let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
];

function groupByType(transactions) {
    let grouped = {};

    transactions.forEach(transaction => {
        if (!grouped[transaction.type]) {
            grouped[transaction.type] = [];
        }
        grouped[transaction.type].push(transaction);
    });

    return grouped;
}

document.addEventListener("DOMContentLoaded", function() {
    let outputDiv = document.getElementById("output");
    let groupedTransactions = groupByType(transactions);

    let outputHtml = "<pre>" + JSON.stringify(groupedTransactions, null, 2) + "</pre>";
    outputDiv.innerHTML = outputHtml;
});
