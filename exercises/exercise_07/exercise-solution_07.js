
// Given arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Step 1: Combine using the spread operator
const combined = [...array1, ...array2];
console.log("Combined array:", combined); // [1, 2, 3, 4, 5, 6]

// Step 2: Deep clone the combined array
function deepCloneArray(arr) {
  return arr.map(item => {
    if (Array.isArray(item)) {
      return deepCloneArray(item); // Recursively clone nested arrays
    } else if (typeof item === "object" && item !== null) {
      return deepCloneObject(item); // Clone nested objects
    }
    return item; // Primitives
  });
}

function deepCloneObject(obj) {
  const copy = {};
  for (let key in obj) {
    const val = obj[key];
    copy[key] = (typeof val === "object" && val !== null)
      ? (Array.isArray(val) ? deepCloneArray(val) : deepCloneObject(val))
      : val;
  }
  return copy;
}

const clone = deepCloneArray(combined);

// Step 3: Modify the clone
clone[0] = 99;

// Step 4: Verify original is unchanged
console.log("Original combined array:", combined); // [1, 2, 3, 4, 5, 6]
console.log("Modified clone:", clone);             // [99, 2, 3, 4, 5, 6]
