function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; // Return the value if obj is not an object
    }
  
    // Handle Arrays
    if (Array.isArray(obj)) {
      return obj.map(deepClone);
    }
  
    // Handle Objects
    const clone = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
    return clone;
  }


  // When ready, use the code below for testing
const original = {
    name: "Alice",
    hobbies: ["reading", "gaming"],
    address: {
      city: "Wonderland",
    },
  };
  
  const clone = deepClone(original);
  
  // Modifying clone
  clone.name = "Bob";
  clone.hobbies.push("chess");
  clone.address.city = "Chessboard";
  
  // Original remains unchanged
  console.log(original);
  // Outputs:
  // {
  //   name: 'Alice',
  //   hobbies: ['reading', 'gaming'],
  //   address: { city: 'Wonderland' }
  // }
  
  console.log(clone);
  // Outputs:
  // {
  //   name: 'Bob',
  //   hobbies: ['reading', 'gaming', 'chess'],
  //   address: { city: 'Chessboard' }
  // }
  
  