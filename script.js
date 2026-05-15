// Compound Interest Calculator
// Formula:
// A = P * (1 + r/n)^(n*t)

// Where:
// A = Final Amount
// P = Principal amount
// r = Annual interest rate
// n = Number of times interest is compounded per year
// t = Time in years

// Predefined variables
let P = 1000;   // Principal amount
let r = 0.05;   // 5% annual interest rate
let n = 1;      // Compounded once per year
let t = 2;      // Time in years

// Calculate final amount using the compound interest formula
let A = P * (1 + r / n) ** (n * t);

// Calculate compound interest only
let compoundInterest = A - P;

// Display results in the console
console.log(`Principal Amount: ₹${P}`);
console.log(`Interest Rate: ${r * 100}%`);
console.log(`Time Period: ${t} years`);
console.log(`Final Amount: ₹${A.toFixed(2)}`);
console.log(`Compound Interest after ${t} years: ₹${compoundInterest.toFixed(2)}`);