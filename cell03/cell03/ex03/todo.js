document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('ft_list');
    const newTodoButton = document.getElementById('newTodo');

    // Load existing to-dos from cookies
    loadTodos();

    // Add new to-do
    newTodoButton.addEventListener('click', () => {
        const todoText = prompt('Enter a new TO DO:');
        if (todoText) {
            addTodo(todoText);
            saveTodos();
        }
    });

    // Add a to-do to the list
    function addTodo(text) {
        const todoItem = document.createElement('div');
        todoItem.textContent = text;
        todoItem.addEventListener('click', () => {
            if (confirm('Do you want to remove this TO DO?')) {
                listContainer.removeChild(todoItem);
                saveTodos();
            }
        });
        listContainer.insertBefore(todoItem, listContainer.firstChild);
    }

    // Save to-dos to cookies
    function saveTodos() {
        const todos = Array.from(listContainer.children).map(todo => todo.textContent);
        document.cookie = `todos=${JSON.stringify(todos)}; path=/`;
    }

    // Load to-dos from cookies
    function loadTodos() {
        const cookies = document.cookie.split('; ').find(cookie => cookie.startsWith('todos='));
        if (cookies) {
            const todos = JSON.parse(cookies.split('=')[1]);
            todos.forEach(todo => addTodo(todo));
        }
    }
});
