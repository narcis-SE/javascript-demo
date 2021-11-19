/*

Ask the user how many tickets.
Calculate total price ($10 / ticket)
If they are buying 12 or more tickets, change the total by giving a 20% discount.
Ask the user if they are a member. Have them type "yes" or "no".
If they are… change the total again with an additional 10% discount.
If they are not… console.log "We recommend a membership!"
*/

let numberOfTickets = parseInt(prompt("How many tickets?"));


let ticketCost = numberOfTickets*10;

if (numberOfTickets >= 12){
    ticketCost=(ticketCost * .8);
}

console.log(ticketCost);

let membershipQuestion = prompt(" Are you a member? (yes or no)");

if (membershipQuestion === "Yes" || membershipQuestion === "yes"){  //check prompt if it is yes or Yes
    ticketCost = (ticketCost * .9);
}else{
    console.log("We recommend a membership!"); 
}

console.log(`Your total is: $${ticketCost}`);

