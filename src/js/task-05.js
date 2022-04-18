// Напиши скрипт, який під час набору тексту 
// в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output.
//  Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".


const inputName = document.querySelector(`#name-input`)
const  titleOutputName = document.querySelector(`#name-output`)

inputName.addEventListener("input", getName );

function getName (event) {
    event.currentTarget.value 
    ? titleOutputName.textContent = event.currentTarget.value
    : titleOutputName.textContent = `Anonimus`
};

