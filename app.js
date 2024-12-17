// Get the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

let tasks = [];
let editIndex = null;

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <span>${task}</span>
      <button class="edit-btn" onclick="editTask(${index})">✏️</button>
      <button class="delete-btn" onclick="deleteTask(${index})">❌</button>
    `;
    taskList.appendChild(li);
  });
}

// Add task
function addTask() {
  const task = taskInput.value.trim();
  if (task === '') return;

  if (editIndex !== null) {
    tasks[editIndex] = task;
    editIndex = null;
  } else {
    tasks.push(task);
  }
  
  taskInput.value = '';
  renderTasks();
}

// Edit task
function editTask(index) {
  taskInput.value = tasks[index];
  editIndex = index;
  addTaskButton.textContent = 'Update';
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Event listener for Add Task button
addTaskButton.addEventListener('click', addTask);

// Initial render
renderTasks();
