let car = {
    type: "Sedan",
    model: "Corolla",
    color: "Blue"
};

console.log("Initial car object:", car); 

console.log("Type of car object:", typeof car);

car.type = "Toyota";
console.log("Updated car object:", car); 

car.wheels = 4;
console.log("Car object after adding wheels property:", car);