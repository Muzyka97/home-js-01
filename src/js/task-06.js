
const validationInput = document.querySelector('input[data-length="6"]')
const getInputLength = validationInput.dataset.length

validationInput.addEventListener("blur", changeColor)

function changeColor(event){
    if(event.currentTarget.value.length >= getInputLength){
        validationInput.setAttribute("class", "valid")
    }
    else{
        validationInput.setAttribute("class", "invalid")
    }
}

