// Task 1 Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`); return profit;
}

// Task 2 Function Expression
const calculateSalesTax = function(amount, taxRate) {
    const salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax.toFixed(2)}`); return salesTax;
};
