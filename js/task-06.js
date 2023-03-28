const input = document.querySelector("#validation-input");
const inputValueLength = input.getAttribute("data-length");

input.addEventListener("blur", () => {
  const enteredValueLength = input.value.length;

  if (enteredValueLength === parseInt(inputValueLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
