// Reference Data Type: Array
let fruits = ["Durian", "Apple", "Grape", "Coconut"];
console.log("Fruits:", fruits);

// Checking the length of array
console.log("Length of fruits:", fruits.length);

// Accesing elements - Array Indexing
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// Add elements
// .push(element) - add element at the end of array
fruits.push("Berry");
console.log("Updated Fruits Added:", fruits);
// Delete elements
// .pop() - delete element at the end of array
fruits.pop();
console.log("Updated Fruits Deleted:", fruits);

// Searching elements
// .includes(element) - check if element exists
console.log("Is Banana in fruits?", fruits.includes("Banana"));

// .forEach() - execute code based on number of elements in array
fruits.forEach(function (fruit) {
  console.log("Fruit:", fruit);
});
