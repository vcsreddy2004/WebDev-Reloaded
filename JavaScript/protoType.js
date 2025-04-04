// ES6 introduces classes which is the modern way to construct objects
// No circular references allowed (parent.__proto__ can't be equal to gultarist)
// the __proto__ value must be an object or null.
// An object can only directly inherit from on e object

// object literals 
const person = {
    alive:true
}
const musician = {
    plays:true,

}

// musician.__proto__ = person; // musician inherits properties of person
// console.log(musician.plays);
// console.log(musician.alive);

// JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto
Object.setPrototypeOf(musician,person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician) === musician.__proto__);
// missing property => go to person

// Extending the prototype chain 
// you can access parent or grand parent properties
const gultarist = {
    strings: 5,
    __proto__:musician
}
console.log(gultarist.alive);
console.log(gultarist.plays);
console.log(gultarist.strings);

// Example 
const car = {
    doors:2,
    seats:"vinyl",
    get seetMaterial() {
        return this.seats;
    },
    set seetMaterial(material) {
        this.seats = material;
    }
}
const luxuryCar = {};
Object.setPrototypeOf(luxuryCar,car);
luxuryCar.seetMaterial = "lether";
console.log(luxuryCar);
console.log(luxuryCar.doors);

// walking up the chains - props and methods are not copied
console.log(luxuryCar.valueOf());

// loop through each object key
Object.keys(luxuryCar).forEach(key=>{
    console.log(key);
});

// but a for..in loop includes inherited props
for (let key in luxuryCar) {
    console.log(key);
}

function Animal(species) {
    this.species = species;
    this.eats = true;
}
// prototype is used to add function to objects
Animal.prototype.walks = function () {
    return `A ${this.species} walks in forest`
}
let dog = new Animal("dog");
console.log(dog.species);
console.log(dog.eats);
console.log(dog.walks());