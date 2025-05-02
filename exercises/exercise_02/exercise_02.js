// 1. Create a prototype object `animal`
const animal = {
  speak: function () {
    return "Generic animal sound";
  }
};

// 2. Create a new object `dog` using `animal` as its prototype
const dog = Object.create(animal);

// 3. Add a 'speak' method to `dog`, overriding the inherited one
dog.speak = function () {
  return "Woof!";
};

// 4. Demonstrate the method and inheritance
console.log(animal.speak()); // Output: "Generic animal sound"
console.log(dog.speak());    // Output: "Woof!"
// 5. Show inheritance using `__proto__` or `isPrototypeOf`
console.log(Object.getPrototypeOf(dog) === animal); // Output: true
