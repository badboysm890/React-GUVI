### Step-by-Step Explanation

#### HTML Structure

1. **HTML Boilerplate**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <h1>To-Do List</h1>
        <input type="text" id="new-task" placeholder="Add a new task">
        <button id="add-task-button">Add Task</button>
        <ul id="task-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

- **<!DOCTYPE html>**: This tells the browser that we are using HTML5.
- **<html lang="en">**: This is the root element of our HTML document. The `lang="en"` attribute specifies the language of the document.
- **<head>**: This section contains meta-information about the HTML document, such as character set, viewport settings, title, and links to stylesheets.
  - **<meta charset="UTF-8">**: Specifies the character encoding for the document, ensuring it displays characters correctly.
  - **<meta name="viewport" content="width=device-width, initial-scale=1.0">**: Ensures the page is responsive and sets the width of the page to follow the screen-width of the device.
  - **<title>To-Do List</title>**: Sets the title of the page, which appears in the browser tab.
  - **<link rel="stylesheet" href="styles.css">**: Links to an external CSS file for styling our page.
- **<body>**: This is where the content of our page goes. Everything inside the body tag is visible on the webpage.
  - **<div id="app">**: This is a container for our application. The `id="app"` uniquely identifies this div.
    - **<h1>To-Do List</h1>**: A heading for our application.
    - **<input type="text" id="new-task" placeholder="Add a new task">**: An input field where users can type in a new task. The `id="new-task"` uniquely identifies this input, and the `placeholder` attribute provides a hint to the user about what to enter.
    - **<button id="add-task-button">Add Task</button>**: A button that users will click to add the new task. The `id="add-task-button"` uniquely identifies this button.
    - **<ul id="task-list"></ul>**: An unordered list where the tasks will be displayed. The `id="task-list"` uniquely identifies this list.
  - **<script src="script.js"></script>**: Links to an external JavaScript file that will add functionality to our page.

#### CSS Styling

1. **styles.css**

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

#app {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    margin: 0 0 20px;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
}

button {
    padding: 10px;
    border: none;
    background-color: #28a745;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 10px;
}

button:hover {
    background-color: #218838;
}

ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
}

li {
    padding: 10px;
    background: #f9f9f9;
    border-bottom: 1px solid #ddd;
}

li:nth-child(odd) {
    background: #eee;
}

li:last-child {
    border-bottom: none;
}
```

- **body**: Sets the overall styling for the body of the webpage.
  - `font-family: Arial, sans-serif;`: Sets the font of the text to Arial. If Arial is not available, it falls back to the default sans-serif font.
  - `display: flex;`: Makes the body a flex container.
  - `justify-content: center;`: Centers the content horizontally.
  - `align-items: center;`: Centers the content vertically.
  - `height: 100vh;`: Sets the height to 100% of the viewport height.
  - `background-color: #f0f0f0;`: Sets the background color to a light gray.

- **#app**: Styles the container of our application.
  - `background: #fff;`: Sets the background color to white.
  - `padding: 20px;`: Adds padding inside the container.
  - `border-radius: 8px;`: Rounds the corners of the container.
  - `box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);`: Adds a shadow around the container to make it stand out.

- **h1**: Styles the heading.
  - `margin: 0 0 20px;`: Removes the default top and bottom margin, but adds a 20px bottom margin.

- **input**: Styles the input field.
  - `padding: 10px;`: Adds padding inside the input field.
  - `border: 1px solid #ccc;`: Adds a light gray border.
  - `border-radius: 4px;`: Rounds the corners of the input field.
  - `width: 200px;`: Sets the width of the input field.

- **button**: Styles the button.
  - `padding: 10px;`: Adds padding inside the button.
  - `border: none;`: Removes the default border.
  - `background-color: #28a745;`: Sets the background color to green.
  - `color: white;`: Sets the text color to white.
  - `border-radius: 4px;`: Rounds the corners of the button.
  - `cursor: pointer;`: Changes the cursor to a pointer when hovering over the button.
  - `margin-left: 10px;`: Adds a 10px margin to the left of the button.

- **button:hover**: Changes the button's background color when hovered over.
  - `background-color: #218838;`: Darkens the background color when the button is hovered.

- **ul**: Styles the unordered list.
  - `list-style: none;`: Removes the default bullet points.
  - `padding: 0;`: Removes the default padding.
  - `margin-top: 20px;`: Adds a 20px top margin.

- **li**: Styles the list items.
  - `padding: 10px;`: Adds padding inside each list item.
  - `background: #f9f9f9;`: Sets the background color to light gray.
  - `border-bottom: 1px solid #ddd;`: Adds a light gray border at the bottom.

- **li:nth-child(odd)**: Styles every odd list item.
  - `background: #eee;`: Sets the background color to a slightly darker gray for every odd list item.

- **li:last-child**: Removes the border from the last list item.
  - `border-bottom: none;`: Removes the bottom border from the last list item.

#### JavaScript Functionality

1. **script.js**

```javascript
// Selecting elements from the DOM
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
```

- **Selecting Elements**:
  - `const newTaskInput = document.getElementById('new-task');`: Selects the input element by its ID and stores it in the `newTaskInput` variable.
  - `const addTaskButton = document.getElementById('add-task-button');`: Selects the button element by its ID and stores it in the `addTaskButton` variable.
  - `const taskList = document.getElementById('task-list');`: Selects the unordered list element by its ID and stores it in the `taskList` variable.

```javascript
// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim(); // Get the text from the input and remove whitespace

    if (taskText !== '') { // Check if the input is not empty
        const li = document.createElement('li'); // Create a new list item
        li.textContent = taskText; // Set the text of the list item
        taskList.appendChild(li); // Add the list item to the task list

        newTaskInput.value = ''; // Clear the input
        newTaskInput.focus(); // Set focus back to the

 input
    }
}
```

- **Function to Add a New Task**:
  - `function addTask() {`: Defines a new function called `addTask`.
  - `const taskText = newTaskInput.value.trim();`: Gets the value of the input field, removes any whitespace from the beginning and end, and stores it in the `taskText` variable.
  - `if (taskText !== '') {`: Checks if the `taskText` is not an empty string.
    - `const li = document.createElement('li');`: Creates a new list item element.
    - `li.textContent = taskText;`: Sets the text content of the list item to the value of `taskText`.
    - `taskList.appendChild(li);`: Adds the new list item to the task list.
    - `newTaskInput.value = '';`: Clears the input field.
    - `newTaskInput.focus();`: Sets focus back to the input field, so the user can immediately start typing a new task.

```javascript
// Adding event listener to the button
addTaskButton.addEventListener('click', addTask);

// Adding event listener to the input to add task on Enter key press
newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
```

- **Adding Event Listeners**:
  - `addTaskButton.addEventListener('click', addTask);`: Adds an event listener to the button. When the button is clicked, it calls the `addTask` function.
  - `newTaskInput.addEventListener('keypress', function(event) {`: Adds an event listener to the input field. When a key is pressed while the input field is focused, it calls this anonymous function.
    - `if (event.key === 'Enter') {`: Checks if the pressed key is the Enter key.
      - `addTask();`: Calls the `addTask` function if the Enter key is pressed.

### Summary

1. **HTML**: Provides the structure of the to-do list application.
2. **CSS**: Styles the application to make it look nice and user-friendly.
3. **JavaScript**: Adds functionality to the application, allowing users to add tasks by clicking the button or pressing the Enter key.

By following this guide, users will understand how to create a basic to-do list application using plain JavaScript, HTML, and CSS, learning fundamental web development concepts along the way.
