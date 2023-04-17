const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onLoginSubmit);

function onLoginSubmit(evt) {
    evt.preventDefault();


const { email, password } = evt.currentTarget.elements;

if (email.value === ""|| password.value === "") {
    return alert("Please, fill in all fields");
}

console.log({
    email: `${email.value.trim()}`,
    password: `${password.value.trim()}`,
  });

  event.currentTarget.reset();
}