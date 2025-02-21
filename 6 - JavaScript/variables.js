// Display Content to the console
console.log("hello world!");

/*
Multi-line comment
i have a ton of code
that i forgot
and this is a reminder of the code
*/

// Variables

// CamelCase: Capitalize the letter of each word, except the first one

// let - mutable/changeable - block scope
// var - mutable/changeable - global scope
// const - unmutable/unchangeable - block scope

let firstName = "Name";
firstName = "I changed the name";
console.log(firstName);

var anotherName = "Another Name";
anotherName = "I changed another name";
console.log(anotherName);

const myName = "Joshua";
// myName = "Jack"; // cannot change const variable
console.log(myName);

// scope
// global and local scope
// Blocks
// () - condition block
// {} - code block

{
  let username = "Anonymous";
  var email = "anonymousemail@email.com";
  console.log(username);
}
console.log(email);
