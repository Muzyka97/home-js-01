// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input) і змінює 
// інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const getInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

getInput.addEventListener("input", changeSize);

function changeSize(event){
    text.style.fontSize = `${event.currentTarget.value}px`
}