function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn =  document.querySelector(".change-color")
const text =  document.querySelector(".color")
const body = document.querySelector("body")

btn.addEventListener("click", changeColor);

function changeColor (event){
  body.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
}


