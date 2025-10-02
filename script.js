// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();
        
        // Check if task text is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Task Creation and Removal
        if (taskText !== "") {
            // Create new list item
            const li = document.createElement('li');
            li.textContent = taskText;
            
            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';
            
            // Assign onclick event to remove button
            removeButton.onclick = function() {
                taskList.removeChild(li);
            };
            
            // Append remove button to list item
            li.appendChild(removeButton);
            
            // Append list item to task list
            taskList.appendChild(li);
            
            // Clear the task input field
            taskInput.value = "";
        }
    }

    // Attach Event Listeners
    // Add task when button is clicked
    addButton.addEventListener('click', addTask);
    
    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});