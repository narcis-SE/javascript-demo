//Object groups multiple values by having a name (key) for each one.
// make is a key, "Ford" is its value. 
//make: "Ford" is a property.

// Car object
let car = {
    make: "Ford",
    model: "Mustang",
    year: 1967
};

car.used = true;

console.log(car);
//use . to access properties of an object
console.log( "Model: " + car.model)

//Arrays - groups multiple values by putting them in order.

let countries = ["China", "India", "USA"]; 
console.log(countries);

// Access individual values using [index]
//Indexes all start with 0, so "China" 's index is 0.
console.log(countries[1]); //Will print "India"