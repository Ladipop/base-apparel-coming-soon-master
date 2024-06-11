const form = document.querySelector(".form-field");
const input = document.querySelector(".email-field");
const submitButton = document.querySelector(".btn");
const errorMessage = document.querySelector(".error-message");
let EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (e) => {
  e.preventDefault();
  const email = input.value;
  if (!EmailRegex.test(email)) {
    input.classList.add("email-background-img");
    input.style.borderColor = "Red";
    errorMessage.textContent = "Please enter a valid email address";
    return;
  } else {
    input.classList.remove("email-background-img");
    input.style.borderColor = "initial";
    errorMessage.textContent = "";
  }
  alert("Submtted");
};

submitButton.addEventListener("click", validate);
