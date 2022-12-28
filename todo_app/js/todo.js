function get_todos() {
    // Array of todos objects
    var todos = new Array;
    // todos in string form to parse
    var todos_str = localStorage.getItem('todo');
    // if there is an existing string, parse it
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    // return the array of objects
    return todos;
}

function add() {
    // get new item from the input field
    var task = document.getElementById('task').value.trim();
    // grab updated array of objects
    var todos = get_todos();
    // append the new item to the array
    if (task !== '') {
        todos.push(task);
    }
    // sets the local item 'todo' to the string version of the todos array so we can access it again
    localStorage.setItem('todo', JSON.stringify(todos));

    // clear the input field
    document.getElementById('task').value = '';

    // update todo list
    show();

    return false;
}

// displays the tasks
function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" onclick="remove(' + i + ')"id="' + i + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

}

function remove(item) {
    var todos = get_todos();
    todos.splice(item, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

document.getElementById('add').addEventListener('click', add);

show();