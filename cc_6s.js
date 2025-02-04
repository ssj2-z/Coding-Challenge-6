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

// Task 3 Arrow Function
const calculateBonus = (salary, performanceRating) =>
{
    let bou=nusPercentage;
    switch (performanceRating) {
        case "Excellent": .10; break; 
        case "Good": bonusPercentage = .15; break;
        case "Average": bonusPercentage = .08; break;
        default: bonusPercentage = 0;
    }

    const bonus = salary * bonusPercentage;
    console.log(`Bonus: $${bonus.toFixed(2)}`); return bonus;
};
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good"); // Expected output: "Bonus: $700"

// Task 4 Parameters & Arguments
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyRate; switch (plan) {
        case "Basic": monthlyRate = 10; break;
        case "Premium": monthlyRate = 20; break;
        case "Enterprise": monthlyRate = 50; break;
    default:
        console.log("Invalid plan selected."); return;
    }
    const totalCost = (monthlyRate * months) - discount;
    console.log(`Total Cost: $${totalCost}`); return totalCost;
}
calculateSubscriptionCost("Basic", 6, 10); // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240"

// Task 5 Returning Values
function convertCurrency(amount, exchangeRate) {
    const convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`); return convertedAmount;
}
convertCurrency(100, 1.1); // Expected output: "Converted Amount: $110"
convertCurrency(250, .85); // Expected output: "Converted Amount: $212.5"

// Task 6 Ascending Order Functions
let orders = [200, 600, 1200, 450, 800];

const applyBulkDiscount = (Orders, discountFunction) => {
    return orders.map(discountFunction);
};
const discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * .9 : amount);
console.log(discountedOrders); // Expected output: [200, 540, 1080, 450, 720]

// Task 7 Closures
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;
        console.log(`Total Expense: $${totalExpenses}`);
        return totalExpenses;
    };
}
let tracker = createExpenseTracker();
console.log(tracker(200)); // Expected output: "Total Expenses: $200"
console.log(tracker(150)); // Expected output: "Total Expenses: $350"

// Task 8 Recurion in JavaScript
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10 ) {
        console.log("Years to Level 10: 0"); return 0;
    }
    const years = 2 +
calculateYearsToPromotion(employeeLevel +1);
    console.log(`Years to Level 10: ${years}`); return years;
}
calculateYearsToPromotion(5); // Expected output: "Years to Level 10: 10"
