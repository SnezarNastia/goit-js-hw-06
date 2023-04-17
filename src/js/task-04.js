const refs = {
    initialValue: document.querySelector("#value"),
    decrementBtn: document.querySelector('[data-action = "decrement"]'),
    incrementBtn: document.querySelector('[data-action = "increment"]'),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", onDecrementClick);
refs.incrementBtn.addEventListener("click", onIncrementClick);

function onDecrementClick() {
    counterValue -= 1;
    newValue();
}

function onIncrementClick() {
    counterValue += 1;
    newValue();
}

function newValue() {
    refs.initialValue.textContent = counterValue
}