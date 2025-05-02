// Given array
const originalArray = [{ a: 1 }, { b: 2 }, { c: 3 }];

// 1. Shallow copy using spread operator
const shallowCopy = [...originalArray];

// 2. Deep copy using structuredClone (modern) or a custom function
// Using JSON method here for clarity
const deepCopy = JSON.parse(JSON.stringify(originalArray));

// Modify an object in shallow copy
shallowCopy[0].a = 100;

// Modify an object in deep copy
deepCopy[1].b = 200;

// Output all arrays
console.log("Original Array:", originalArray);
// [{ a: 100 }, { b: 2 }, { c: 3 }] ← affected by shallow copy

console.log("Shallow Copy:", shallowCopy);
// [{ a: 100 }, { b: 2 }, { c: 3 }] ← same references to objects

console.log("Deep Copy:", deepCopy);
// [{ a: 1 }, { b: 200 }, { c: 3 }] ← changes are isolated
