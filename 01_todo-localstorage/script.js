document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    // Load tasks from localStorage, default to an empty array
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // 1. Initial render of tasks loaded from localStorage
    tasks.forEach(task => rendertask(task));

    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return; // Use strict equality for robustness

        const taskobj = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(taskobj);
        savetask();
        // Pass the new taskobj to rendertask
        rendertask(taskobj);
        todoInput.value = "";
        console.log(tasks);
    });

    function savetask() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function rendertask(task) {
        const li = document.createElement("li");
        // Ensure task-id is a string when setting the attribute
        li.setAttribute('task-id', task.id.toString()); 

        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            <span>${task.text}</span>
            <button>delete</button>
        `;
        
        // 2. Event listener for Toggling Completion (Click on <li> itself, but not the button)
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            
            // Update the task object in the 'tasks' array
            const taskIndex = tasks.findIndex(t => t.id === task.id);
            if (taskIndex > -1) {
                tasks[taskIndex].completed = !tasks[taskIndex].completed;
                li.classList.toggle('completed');
                savetask();
            }
        });

        // 3. Event listener for Deleting the task (Click on the button)
        li.querySelector('button').addEventListener('click', (e) => {
            //  Add parentheses to call the function
            e.stopPropagation(); // prevent li's toggle from firing
            
            // Filter out the task by its ID
            tasks = tasks.filter(t => t.id !== task.id);
            
            li.remove();
            savetask();
        });

        todoList.appendChild(li);
    }
});