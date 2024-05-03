const inputField = document.querySelector('.task');
const addButton = document.querySelector('.but');
const taskList = document.createElement('ul');
taskList.className = 'task-list';
document.body.appendChild(taskList);

let taskId = 1; // Initialize task ID counter

// Function to add a
function addTask() {
    const taskText = inputField.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.dataset.id = taskId; // Assigning task ID
        taskItem.textContent = `${taskId}. ${taskText}`;

        // Adding delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        // Adding update button
        const updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.className = 'update-button';
        updateButton.addEventListener('click', function() {
            const updatedText = prompt('Update task:', taskText);
            if (updatedText !== null && updatedText.trim() !== '') {
                taskItem.textContent = `${taskId}. ${updatedText.trim()}`;

                // Adding delete button after updating
                taskItem.appendChild(deleteButton);
            }
        });

        // Appending buttons to task item
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(updateButton);

        // Appending task item to task list
        taskList.appendChild(taskItem);

        // Incrementing task ID
        taskId++;

        // Clearing input field
        inputField.value = '';
    } else {
        alert('Please enter a task!');
    }
}

// Event listener for add button
addButton.addEventListener('click', addTask);

