const parrafo = document.querySelector("p"); //Llamo al parrafo a traves de querySelector
const btn = document.querySelector("button"); //llamo al boton a traves de querySelector

let contador = 0;

btn.addEventListener("click",() =>{ 
    /* console.log("click"); */
    contador++;
   parrafo.textContent = contador;
})