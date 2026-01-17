// variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

const createTaskElement = (taskText) => {
    const task = document.createElement('div');
    task.classList.add('task');

    const li = document.createElement('li');
    li.textContent = taskText;

    const doneButton = document.createElement('button');
    doneButton.classList.add('done-task');
    doneButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    doneButton.setAttribute('aria-label', 'Mark as done');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-task');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.setAttribute('aria-label', 'Delete task');

    doneButton.addEventListener('click', () => {
        li.classList.toggle('task-done');
        task.classList.toggle('task-complete');
    });

    deleteButton.addEventListener('click', () => {
        task.remove();
    });

    task.append(li, doneButton, deleteButton);
    return task;
};

const addTaskHandler = () => {
    const value = inputTask.value.trim();
    if (!value) {
        inputTask.focus();
        return;
    }

    const taskElement = createTaskElement(value);
    taskContainer.appendChild(taskElement);
    inputTask.value = '';
    inputTask.focus();
};

// event listener for add button
addTask.addEventListener('click', addTaskHandler);

// allow Enter key to add task
inputTask.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTaskHandler();
    }
});