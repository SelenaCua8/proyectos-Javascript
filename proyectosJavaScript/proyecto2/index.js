window.addEventListener("load", () =>{

    todos = JSON.parse(localStorage.getItem("todos")) || [];

    const todoFormElement = document.querySelector("#add-todo-form");

todoFormElement.addEventListener("submit", e =>{
    e.preventDefault();
    const newTodo = {
        content: e.target.content.value,
        done: false,
        createdAt: new Date().getTime()

    }
    /*todos.push(newTodo);*/
    todos = [...todos, newTodo];
    localStorage.setItem("todos", JSON.stringify(todos));

    e.target.reset();

    DisplayTodoList();
})
    function DisplayTodoList(){
        const todoList = document.querySelector("#todo-list");
        todoList.innerHTML = "";
         
        todos.forEach(todo => {
            /*aca creo el div todo-item*/ 
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        /*<div class="todo-item">
                    <input type="checkbox">
                   <input value="Hacer el HTML" readonly>
                   <button class="edit-bu tton">Edit</button>
                   <button class="delete-button">Delete</button>
                </div>*/

        const inputDone = document.createElement("input");
        inputDone.type = "checkbox";
        inputDone.value = todo.done;

        const inputContent = document.createElement("input");
        inputContent.type = "text";
        inputContent.value = todo.content;

        const itemAction = document.createElement("div");
        itemAction.classList.add("item-action");
        const editButton = document.createElement("button");
        editButton.classList.add("edit-button");
        editButton.textContent = "Edit";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.classList.add("delete-button");

        itemAction.append(editButton, deleteButton);
        

        todoItem.append(inputDone, inputContent, itemActions);
        






    })

}

        


})

