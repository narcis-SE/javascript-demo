//Counting from one to 10
//1: start at 1
//2: Keep looping when <=10
//3: Incriment by 1

//count from 1 - 10
for(let i=1; i <= 10; i++){
    console.log(i);
    
}
console.log(" "); 

// count from 10 - 1 
for(let i=10; i>=1; i--){
    console.log(i)
}
console.log(" "); 

//count evens from 2 - 10
for(let i=2; i<=10; i+=2){
    console.log(i);
}
console.log(" ");

//loop 5 times (0 to 4)
for(let i = 0; i < 5; i++){
    console.log(i);
}

console.log(" ")

//How many licks does it take to get to the center
let diameter = 100;
let lickPower = 3;
let lickCount = 0;

while(diameter > 0){
    diameter -= lickPower;
    lickCount++;

    if( lickCount = 3){
        console.log("CRUNCH!")
        break; //exits the loop immediately 
    }
}
console.log(`It takes ${lickCount} licks to get to the center...`);

/* let word = prompt("Enter a word.");

while(word !== "fish"){
    console.log("Incorrect word.");
    word = prompt("Enter a word.");
}

*/ 

console.log(" ")

//Loop through array.

//index=       0         1           2            3
let foods = ["donuts", "apple", "candy canes", "lettuce"];

//for loop
for(let i=0; i< foods.length; i++){
    console.log(foods[i]);
}

console.log(" ")
//for .... of loop (GREAT for arrays and alike)
//Syntax
//(const newVariable of array)
//newVariable contains one item from the array at a time
//inside the loop, use the newVariable
for( const food of foods){
    console.log(food)
}

