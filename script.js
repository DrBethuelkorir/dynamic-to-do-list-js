document.addEventListener('DOMContentLoaded', function() {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize and Load Tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTaskToDOM(taskText, false); // 'false' means don't save to Local Storage again
        });
    }

    // Function to add task to DOM (separate from saving logic)
    function addTaskToDOM(taskText, save = true) {
        // Create new li element
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';
        
        // Assign onclick event to remove button
        removeButton.onclick = function() {
            // Remove from DOM
            taskList.removeChild(li);
            // Remove from Local Storage
            removeTaskFromStorage(taskText);
        };
        
        // Append remove button to li, then li to taskList
        li.appendChild(removeButton);
        taskList.appendChild(li);
        
        // Save to Local Storage if needed
        if (save) {
            saveTaskToStorage(taskText);
        }
    }

    // Save task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Main addTask function (called by button click and Enter key)
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Add task to DOM and save to Local Storage
        addTaskToDOM(taskText, true);
        
        // Clear the task input field
        taskInput.value = "";
    }

    // Load tasks when page loads
    loadTasks();

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});