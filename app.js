let inp  = document.querySelector("#gtinp");
let ul   = document.querySelector("#getul");

const todos = JSON.parse(localStorage.getItem("todos")) || [];


function addtodo(event) {

    event.preventDefault();

    todos.push(inp.value);

    const str = JSON.stringify(todos);

    localStorage.setItem("todos", str)

    showtodos()

}


function showtodos() {
    ul.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        ul.innerHTML += `
            <li>
                <span>${todos[i]}</span>
                <div class="task-actions">
                    <button onclick="editTodo(${i})" title="Edit">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button onclick="deltodo(${i})" title="Delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </li>
        `;
        const str = JSON.stringify(todos);
        localStorage.setItem("todos", str)
    }
}


showtodos()


function deltodo(index) {
    todos.splice(index, 1);


    const str = JSON.stringify(todos);

    localStorage.setItem("todos", str)


    showtodos()
}


function editTodo(index) {
    const newvalue = prompt("enetr new task", todos[index]);

    todos[index] = newvalue

    const str = JSON.stringify(todos);

    localStorage.setItem("todos", str)


    showtodos()
}
