//Comments!
/* Placing an order for burgers and fries
- Ask how many burgers
- Ask how may fries?
- Ask their name?
- Calculate the total
- Print a reciept
*/

//Converts input to a integer
let burgerCount = parseInt(prompt("How many burgers?"));
let fryCount = parseInt(prompt("How many fries?"));

//Input remains string
let customerName = prompt("What's the name for your order?");

//Burgers are $5
//Fries are $3
let total = ((burgerCount*5) + (fryCount *3));

//Back tick use to parse equation into total value
console.log(`Order for ${customerName}`);
console.log(`Burger total: ${burgerCount} = $${burgerCount*5}`);
console.log(`Fry total: ${fryCount} = $${fryCount * 3}`);
console.log(`Order total: $${total}`);