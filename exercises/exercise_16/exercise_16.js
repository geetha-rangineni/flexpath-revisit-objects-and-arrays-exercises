// Step 1: Create a shared prototype object
const userPrototype = {
    sayHello() {
      console.log(`Hello, my name is ${this.name}!`);
    },
  };
  
  // Step 2: Create the createUser function
  function createUser(name) {
    // Use Object.create to create a new object that inherits from userPrototype
    const newUser = Object.create(userPrototype);
    
    // Add a 'name' property to the new object
    newUser.name = name;
    
    return newUser;
  }
  
  // Step 3: Create two users using the createUser function
  const user1 = createUser("Alice");
  const user2 = createUser("Bob");
  
  // Step 4: Demonstrate that both users share the same prototype
  user1.sayHello();  // Output: "Hello, my name is Alice!"
  user2.sayHello();  // Output: "Hello, my name is Bob!"
  
  // Check if both users share the same prototype
  console.log(user1.__proto__ === user2.__proto__);  // Output: true
  console.log(user1.__proto__ === userPrototype);    // Output: true
  

  /*  Prototype-based inheritance is achieved using Object.create(userPrototype), which creates a new object that inherits properties and methods from userPrototype.
Both user1 and user2 share the same prototype (userPrototype), allowing them to access the sayHello method.
Each user has its own name property, which makes the greeting personalized, but the shared method sayHello is available to all users.
This demonstrates object sharing and prototype chaining in JavaScript*/