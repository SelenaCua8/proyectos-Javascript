const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener("click",(e) =>{  
    e.preventDefault(); //Hago q no se recargue la pagina

    const text = input.value; //esto cuando se pique el + va a aggarar el valor q esta en el input y va a guardarlo
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = ""; // cada vez q quiero agregar una tarea se pone en blanco el input para q no haya q borrarlo
    empty.style.display = "none";
});

function addDeleteBtn (){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.claaName = "btn-delete"; //quita la clase q tiene y le deja esta

    deleteBtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement; // se refiere al boton 
        ul.removeChild(item);
    });
    return deleteBtn;
}