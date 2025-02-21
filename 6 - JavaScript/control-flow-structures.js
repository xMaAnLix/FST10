// Control flow Structures

// Conditional Statement
// Allow us to excute different blocks of code based on a condition

// if, else if, else statements
let temperature = 21;

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
  console.log("It's cool outside");
} else if (temperature >= 0 && temperature < 30) {
  console.log("It's warm outside");
} else {
  console.log("It's hot outside");
}

// Looping statements
// For loop

// "components" of a for loop
// 1st: Variable Initialization
// 2nd: Condition Expression
// 3rd: increment / Decrement ++/--

for (let i = 1; i <= 3; i++) {
  console.log("For Loop Count:", i);
}

// While Loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count:", count);
  count++;
}
