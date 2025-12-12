// 1. Select DOM elements we need to interact with
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// 2. Add Event Listener to the form submit action
taskForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting the traditional way (reloading the page)
    event.preventDefault();

    const taskText = taskInput.value;

    // Only add task if input is not empty
    if (taskText !== "") {
        addTask(taskText);
        // Clear input field after adding
        taskInput.value = '';
        taskInput.focus();
    }
});


// 3. The core function to create a new task item dynamically
function addTask(text) {
    // A. Create the main list item (<li>)
    const li = document.createElement('li');
    li.classList.add('task-item');

    // B. Create the span that holds the actual text content
    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = text;

    // C. Create the container for action buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    // D. Create the Complete Button (✓)
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '✓';
    completeBtn.classList.add('btn-action', 'btn-complete');
    // Add click functionality to toggle completion
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // E. Create the Delete Button (✗)
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '✗';
    deleteBtn.classList.add('btn-action', 'btn-delete');
    // Add click functionality to remove the item
    deleteBtn.addEventListener('click', function() {
        // Simple fade out effect before removing
        li.style.opacity = '0';
        setTimeout(() => {
             li.remove();
        }, 300);
    });

    // F. Assemble the list item: Put buttons into actionsDiv, and everything into li
    actionsDiv.appendChild(completeBtn);
    actionsDiv.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actionsDiv);

    // G. Finally, add the new list item to the main UL in the HTML
    taskList.appendChild(li);
}
// script.js


// 2. Simple Task Completion (Clicking a task fades it out slightly)
const taskCards = document.querySelectorAll('.task-card');
taskCards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle a 'completed' visual state
        if(card.style.opacity === '0.5') {
            card.style.opacity = '1';
            card.style.border = 'none';
        } else {
            card.style.opacity = '0.5';
            card.style.border = '1px solid #4e6ef2';
        }
    });
});

// 3. User Interaction - "Add New Task" Simulation
// We will look for the "+" button in the header (if you added one) or just log it for now.
console.log("Dashboard Loaded Successfully");

// 4. Dynamic Date Update
// You can add a span with class "current-date" in your HTML to use this
const dateElement = document.querySelector('.current-date');
if (dateElement) {
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}
// Function to open the modal
function openModal() {
    document.getElementById('addTaskModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('addTaskModal').style.display = 'none';
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById('addTaskModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Sidebar interaction (Visual only)
const menuItems = document.querySelectorAll('.sidebar-icon');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // If it's a link, let it go there, otherwise toggle active class
        if(this.getAttribute('href') === '#') {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        }
    });
});
// In script.js
const menuBtn = document.querySelector('.sidebar-icon'); // Assuming the first one is the menu
const sidebar = document.querySelector('.sidebar');

if(menuBtn) {
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent it from acting like a link
        // Toggle a class that makes the sidebar smaller or hidden
        // For now, let's just alert so you know it works, or add CSS logic later
        console.log("Menu toggled");
    });
}