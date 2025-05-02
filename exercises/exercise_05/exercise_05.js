function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
  };
  
  const alice = new Person("Alice");
  
  console.log(alice.greet());
  console.log(alice.hasOwnProperty("greet"));
  console.log(Object.getPrototypeOf(alice) === Person.prototype);
  console.log(Person.prototype.constructor === Person);
  