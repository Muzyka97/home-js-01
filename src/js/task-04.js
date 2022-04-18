const counter = {
value: 0,

    decrement(){
        this.value -= 1
    },
    increment(){
        this.value +=1
    }
}

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value')

decrementButton.addEventListener("click", function(){
    
    counter.decrement()
    valueEl.textContent = counter.value
});
incrementButton.addEventListener("click", function(){
    
    counter.increment()
    valueEl.textContent = counter.value
});