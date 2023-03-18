const parrafo = document.querySelector("p"); //Llamo al parrafo a traves de querySelector
const btn = document.querySelector("button"); //llamo al boton a traves de querySelector

let contador = 0;

btn.addEventListener("click",() =>{  // desde boton, llamamos al evento click, declaramos una variable como contador y cada vez
    /* console.log("click"); */       // que se le hace click se le suma ++ un numero 
    contador++;
   parrafo.textContent = contador; //textContent es que vos estas cambiando el parrafo por lo que pasa en contador
})