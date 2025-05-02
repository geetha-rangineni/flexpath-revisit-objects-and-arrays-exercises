// Initialise Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Remove elements from index 2 to 4 (inclusive) using splice
numbers.splice(2, 3); 

//Now numbers become [1, 2, 6, 7, 8, 9]

//Create a new array from index 5 to the end using slice
let newArray = numbers.slice(5);
newArray = [9];

//Insert the number 10 at index 3 using splice
numbers.splice(3, 0, 10); // At index 3, delete 0 elements, insert 10

//Final numbers become [1, 2, 6, 10, 7, 8, 9]

console.log("Original array:", numbers); //  output [1, 2, 6, 10, 7, 8, 9]
console.log("New array:", newArray);     // output  [9]
