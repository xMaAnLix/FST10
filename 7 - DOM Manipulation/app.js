// Document Object Model (DOM)
// Allow us to use JS to change the style, content, and structure of our website.

// querySelector
// pass #id, .classname, tagname
// Return: first element

const elementWithID = document.querySelector("#first-div");
// console.log(elementWithID);

elementWithID.textContent = "Div 1";
elementWithID.style.color = "Green";
elementWithID.style.fontFamily = "Impact";

const elementWithClass = document.querySelector(".sample-div");
// console.log(elementWithClass);

// querySelectorAll()
// pass #id, .classname, tagname
const elementsWithClass = document.querySelectorAll(".sample-div");
// console.log(elementsWithClass);

elementsWithClass[1].textContent = "Div 2";
elementsWithClass[1].style.color = "#faf0ca";
elementsWithClass[1].style.backgroundColor = "#0d3b66";

const headings = document.querySelectorAll("h3");
console.log(headings);

headings.forEach(function (heading) {
  heading.style.color = "#f4f1de";
  heading.style.backgroundColor = "#e07a5f";
  heading.style.textAlign = "center";
});

// Updating Element Attributes
const dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Appending New Elements
const parentElement = document.querySelector("#parent-element");
const createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

// Remove an element
const elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

// Adding Event Listeners and Manipulating Element Styles
const darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
  const pageContainer = document.querySelector("#page-container");
  pageContainer.style.backgroundColor = "black";
  pageContainer.style.color = "white";

  const pageModeText = document.querySelector("#page-mode-text");
  pageModeText.textContent = "Dark Mode";
});

// Activity:
// Modify this button so that, if you are currently in the lightmode.
// When you click the button, you will change to Dark Mode.
// But, if you are currently in the dark mode.
// When you click the button, you will change back to Light Mode.
