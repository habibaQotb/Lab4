const input = document.getElementById('input') as HTMLInputElement;
const addButton = document.getElementById('addButton') as HTMLButtonElement;
const taskList = document.getElementById('list') as HTMLUListElement;

addButton.addEventListener('click', function() {
  const taskText = input.value.trim();
  if (taskText !== '') {
    const task = document.createElement('li');
    task.className = 'task';
    taskList.appendChild(task);
    
    const span = document.createElement('span');
    span.textContent = taskText;
    task.appendChild(span);
    span.addEventListener('click', function() {task.classList.toggle('completed');});

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() { task.remove(); });
    deleteButton.className = 'deleteButton';
    task.appendChild(deleteButton);
    
    input.value = '';
  }
});
