const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "black", "orange", "lightblue", "lime", "violet", "fuchsia"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",() =>{
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
/*addEventListener --> escucha para un evento y cuando sucede, se ejecuta una función


*/ 