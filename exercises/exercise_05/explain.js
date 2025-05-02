function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const alice = new Person("Alice");

console.log(alice.greet());
/*
  greet is not a direct property of alice; it’s inherited from Person.prototype.
JavaScript follows the prototype chain, finds greet on Person.prototype, and calls it in the context of alice.
*/
console.log(alice.hasOwnProperty("greet"));
/*
  hasOwnProperty() checks only for properties directly on the object.
Since greet is on Person.prototype and not directly on alice, the result is false.
*/

console.log(Object.getPrototypeOf(alice) === Person.prototype);
/*
  When you do new Person("Alice"), the new object alice has its prototype set to Person.prototype.
So, this confirms that alice's prototype is Person.prototype.
*/

console.log(Person.prototype.constructor === Person);
/*
  By default, when you create a function like Person, it gets a prototype object with a constructor property pointing back to the function itself.
  So Person.prototype.constructor refers to Person.
*/
