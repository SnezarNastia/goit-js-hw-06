const userInput = document.querySelector("#validation-input");

userInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  userInput.classList.add("invalid");
  if (event.currentTarget.value.length === Number(userInput.dataset.length)) {
    userInput.classList.replace("invalid", "valid");
  } else {
    userInput.classList.replace("valid", "invalid");
  }
}
