// Operators and Expressions

// Arithemic Operators
let num1 = 10;
let num2 = 3;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Exponent (**):", num1 ** num2);
console.log("Remainder (%):", num1 % num2);

// Order of Operation
// PEMDAS / BODMAS
// PEMDAS - Parentheses, Exponents, Multiplication, Division, Subtraction
// BODMAS - Bracket, Order (Left to Right), Multiplication, Addition, Subtraction
let answer = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("Answer:", answer);

// String Expressions ;or Concatenation
let greeting = "Hi";
let firstName = "Joshua";
console.log(greeting + " " + firstName + "!");

// Comparison Operations
// Type Coercion: convert the type if necessary
console.log("Equal to(==):", 5 == 5);
console.log("Equal to (==) type coercion:", 5 == "5");

console.log("Not Equal (!=):", 5 != 3);
console.log("Not Equal (!=)type coercion:", 5 != "3");

console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===):", 5 === "5");

console.log("Strict Not Equal to (===):", 5 !== 5);
console.log("Strict Not Equal to (===):", 5 !== "5");

console.log("Greater Than (>):", 5 > 10);
console.log("Less Than (<):", 5 < 10);
console.log("Greater Than or Equal to (>=):", 5 >= 10);
console.log("Less Than or Equal to(<=):", 5 <= 10);

// Logical Operators
// AND, OR, NOT

let sunny = true;
let warm = false;

// AND (&&) = True if all conditions are met
console.log("Is it sunny AND warm?:", sunny && warm);
// OR (||) - True if att least one condition is met
console.log("Is it sunny OR warm?:", sunny || warm);
// NOT (!) - Invert the boolean value
console.log("NOT sunny?:", !sunny);

// Assignment Expressions
let num3 = 10;
let num4 = 5;

// Addition Assignment (+=)
// num3 += num4;
console.log("Addiion Assignment:", num3);
// Subtraction Assignment (-=)
// num3 -= num4;
console.log("Addiion Assignment:", num3);
// Multiplication Assignment (*=)
// num3 *= num4;
console.log("Addiion Assignment:", num3);
// Division Assignment (/=)
// num3 /= num4;
console.log("Addiion Assignment:", num3);
// Exponent Assignment (**=)
// num3 **= num4;
console.log("Addiion Assignment:", num3);
// Remainder Assignment (%=)
num3 %= num4;
console.log("Addiion Assignment:", num3);
