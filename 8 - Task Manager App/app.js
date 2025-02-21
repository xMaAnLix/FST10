// Step 1: Select DOM elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Create event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

// Step 3: Function to add a new task
function addTodo(e) {
  // Prevent the form submission
  e.preventDefault();

  // Create the todoDiv container
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create a new todo list item
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  // Create the complete todo button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete-btn");
  completeButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completeButton);

  // Create the delete todo button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);

  // Append the todo div to the todo list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

// Step 4: Function to delete or complete task
function deleteOrCompleteTodo(e) {
  const targetBtn = e.target;
  if (targetBtn.classList.contains("trash-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.add("fall");
    todoDiv.addEventListener("transitionend", function () {
      todoDiv.remove();
    });
  }

  if (targetBtn.classList.contains("complete-btn")) {
    const todoDiv = targetBtn.parentElement;
    todoDiv.classList.toggle("completed");
  }
}

// Step 5: Function to filter task based on completion status
function filterTodos(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    const filterValue = e.target.value;
    if (filterValue === "all") {
      // show all items
    } else if (filterValue === "completed") {
      // show the completed items
      if (filterValue === "all") {
        todo.style.display = "flex"; // elements are visible
      } else if (filterValue === "completed") {
        // show the completed items
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          // hide the uncompleted items
          todo.style.display = "none";
        }
        // hide the uncompleted items
      } else if (filterValue === "uncompleted") {
        // show the uncompleted items
        // hide the completed items
      }
      // hide the uncompleted items
    } else if (filterValue === "uncompleted") {
      // show the uncompleted items
      if (!todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        // hide the completed items
        todo.style.display = "none";
      }
    }
  });
}
