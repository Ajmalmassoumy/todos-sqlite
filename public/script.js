// Function to display all todos
async function displayTodos() {
  const response = await fetch('/todos');
  const todos = await response.json();
  const display = document.getElementById('todoDisplay');
  display.innerHTML = '';

  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.textContent = `#${todo.id} - ${todo.name} [${todo.isComplete ? 'Done' : 'NOT Done'}]`;
    display.appendChild(todoItem);
  });
}

// Display Todos button
document.getElementById('displayTodos').addEventListener('click', displayTodos);

// Submit new Todo
document.getElementById('submitTodo').addEventListener('click', async () => {
  const nameInput = document.getElementById('todoName');
  const priorityInput = document.getElementById('todoPriority');
  const isFunInput = document.getElementById('todoIsFun');

  const name = nameInput.value;
  const priority = priorityInput.value || 'low';
  const isFun = isFunInput.value || 'true';

  const todo = { name, priority, isFun };

  const response = await fetch('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });

  const result = await response.json();
  alert(`Todo added: ${JSON.stringify(result)}`);

  // Clear input fields
  nameInput.value = '';
  priorityInput.value = '';
  isFunInput.value = '';

  // Refresh the todo list
  displayTodos();
});

// Delete Todo
document.getElementById('deleteTodo').addEventListener('click', async () => {
  const idInput = document.getElementById('todoIdToDelete');
  const id = idInput.value;

  const response = await fetch(`/todos/${id}`, {
    method: 'DELETE'
  });

  const result = await response.json();
  alert(result.message);

  // Clear the ID input field
  idInput.value = '';

  // Refresh the todo list
  displayTodos();
});
