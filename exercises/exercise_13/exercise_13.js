// Create the user object
const user = {
    username: "johndoe",
    email: "john@example.com",
  };
  
  // Add 'password' as a non-enumerable property
  Object.defineProperty(user, "password", {
    value: "secret123",
    enumerable: false, //  this hides it from enumeration
    writable: true,
    configurable: true,
  });
  
  //  Try to access properties using a for...in loop
  console.log("Using for...in:");
  for (let key in user) {
    console.log(key); // Only 'username' and 'email' will show
  }
  
  // Check Object.keys
  console.log("Using Object.keys():", Object.keys(user)); // ['username', 'email']
  
  // Convert to JSON
  console.log("JSON.stringify(user):", JSON.stringify(user)); // password will not appear
  
  //  Direct access still works
  console.log("Accessing password directly:", user.password); // secret123


  /*
  Explanation:

  Object.defineProperty() is used to create the password property with:
  enumerable: false: hides it from loops and JSON.stringify.
  writable: true: you can still change the password.
  configurable: true: allows the property to be deleted or modified later.

*/
  