// Task 1 Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`); return profit;
    calculateProfit(10, 25, 15); // Expected output: "Total Profit: $150"
    calculateProfit(20, 35, 55); // Expected output: "Total Profit: $275"
}

// Task 2 Function Expression
const calculateSalesTax = function(amount, taxRate) {
    const salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax.toFixed(2)}`); return salesTax;
};
calculateSalesTax(100, .07); // Expected output: "Sales Tax: $7.00"
calculateSalesTax(500, .1); // Expected output: "Sales Tax: $50.00"