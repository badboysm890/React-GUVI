// Selecting elements from the DOM
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim(); // Get the text from the input and remove whitespace

    if (taskText !== '') { // Check if the input is not empty
        const li = document.createElement('li'); // Create a new list item
        li.textContent = taskText; // Set the text of the list item
        taskList.appendChild(li); // Add the list item to the task list

        newTaskInput.value = ''; // Clear the input
        newTaskInput.focus(); // Set focus back to the input
    }
}

// Adding event listener to the button
addTaskButton.addEventListener('click', addTask);

// Adding event listener to the input to add task on Enter key press
newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});