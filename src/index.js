document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // Get the form, tasks list, and clear tasks button elements
const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

// Function to add a new task
function addTask(event) {
  event.preventDefault(); // Prevent form submission

  const input = document.getElementById("new-task-description");
  const task = input.value;

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  input.value = ""; // Clear the input field
}

// Add event listener to the form submit event
form.addEventListener("submit", addTask);

});
