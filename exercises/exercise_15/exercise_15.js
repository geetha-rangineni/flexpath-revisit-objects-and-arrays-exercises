// Step 1: Create the object
const data = {};

// Step 2: Define 'items' as a read-only, non-configurable property
Object.defineProperty(data, "items", {
  value: [],
  writable: false,        //  Cannot reassign data.items = ...
  configurable: false,    //  Cannot delete data.items
  enumerable: true        //  Will show up in Object.keys / for...in
});

// You can still modify the contents of the array
data.items.push("item1");
data.items.push("item2");

// These operations will silently fail or throw in strict mode
data.items = ["newItem"];         // Won't work
delete data.items;                // Won't work

// Log the final object
console.log("data:", data);

/*
  Explanation:

  - writable: false prevents reassignment of `data.items(i.e., `data.items = ...` won't work).
  
  - configurable: false prevents the deletion or redefinition of `data.items`.

  - Although  data.items cannot be reassigned or deleted, since it is an array, its contents (elements) can still be modified (e.g., using `push()`, `pop()`, etc.).

  - This approach allows controlled mutability, where the reference to the array is fixed, but the array's internal elements can be modified.
*/

