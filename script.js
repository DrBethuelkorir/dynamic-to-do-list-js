document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Task Creation and Removal - EXACTLY as specified
        if (taskText !== "") {
            // Create new li element and set textContent
            const li = document.createElement('li');
            li.textContent = taskText; // MUST use textContent
            
            // Create remove button with exact specifications
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn'; // MUST use className
            
            // Assign onclick event that removes from taskList
            removeButton.onclick = function() {
                taskList.removeChild(li); // MUST remove from taskList
            };
            
            // Append in correct order
            li.appendChild(removeButton);
            taskList.appendChild(li);
            
            // Clear input field
            taskInput.value = "";
        }
    }

    // Attach Event Listeners - EXACTLY as specified
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // MUST be 'keypress' and check event.key
            addTask();
        }
    });
});