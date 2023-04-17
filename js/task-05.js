const refs = {
    nameInput: document.querySelector("#name-input"),
    nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onInputName);

function onInputName(evt) {
    if (evt.currentTarget.value) {
        refs.nameOutput.textContent = evt.currentTarget.value;
    } else refs.nameOutput.textContent = "Anonymous";
}