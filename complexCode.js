// Filename: complexCode.js

/* 
   Complex Code: A sophisticated and elaborate Javascript code
   This code demonstrates advanced concepts and techniques.
*/

// Declare variables
let data = [];
let sum = 0;

// Generate random data
for(let i = 0; i < 100; i++) {
    data.push(Math.floor(Math.random() * 100));
}

// Calculate sum of data
for(let i = 0; i < data.length; i++) {
    sum += data[i];
}

// Display sum
console.log(`Sum: ${sum}`);

// Sort data in ascending order
data.sort((a, b) => a - b);

// Display sorted data
console.log(`Sorted Data: ${data}`);

// Find maximum number
let max = Math.max(...data);
console.log(`Max: ${max}`);

// Find minimum number
let min = Math.min(...data);
console.log(`Min: ${min}`);

// Calculate average
let average = sum / data.length;
console.log(`Average: ${average}`);

// Count occurrences of each number
let occurrences = {};
for(let i = 0; i < data.length; i++) {
    if(data[i] in occurrences) {
        occurrences[data[i]]++;
    } else {
        occurrences[data[i]] = 1;
    }
}

// Display occurrences
console.log("Occurrences:");
for(let key in occurrences) {
    console.log(`${key}: ${occurrences[key]}`);
}

// Perform complex calculations
let result = Math.pow(Math.sqrt(max) + Math.sqrt(min), 2) * average;

// Display result
console.log(`Result: ${result.toFixed(2)}`);

// Generate an HTML table with data
let table = document.createElement("table");
let tableBody = document.createElement("tbody");

// Create table header
let tableHeader = document.createElement("thead");
let headerRow = document.createElement("tr");
let columns = Object.keys(occurrences);
for(let i = 0; i < columns.length; i++) {
    let headerCell = document.createElement("th");
    headerCell.textContent = columns[i];
    headerRow.appendChild(headerCell);
}
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

// Create table rows with data
for(let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    for(let j = 0; j < columns.length; j++) {
        let cell = document.createElement("td");
        cell.textContent = data[i] === parseInt(columns[j]) ? "X" : "";
        row.appendChild(cell);
    }
    tableBody.appendChild(row);
}
table.appendChild(tableBody);

// Add table to the document
document.body.appendChild(table);

// Perform asynchronous operation
setTimeout(() => {
    console.log("Async operation completed.");
    // Perform more complex logic here
}, 2000);