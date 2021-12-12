const form = document.getElementById("form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", showError);
//check if the correct password is enterred
const checkPassWord = () => {
    const passWord = document.getElementById("password");
    const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    if (!passRegex.test(passWord.value)) return passWord.parentElement.classList.add("error"); 
}
//Check if the correct email is enterred
const checkEmail = () => {
    const email = document.getElementById("email");
    const emailRegex = /^\w+@\w+/gi 
    if (!emailRegex.test(email.value)) return email.parentElement.classList.add("error");
}
//check if any text input is not empty
const checkText = () => {
    const arr = Array.from(document.querySelectorAll("input[type='text'"));
    arr.forEach((input) => input.value === "" ? input.parentElement.classList.add("error") : input.value);
}
//Show erros on submit
function showError(e) {
    e.preventDefault();
    checkText();
    checkEmail();
    checkPassWord();
}
//remove errors when typing in an input field
Array.from(input).forEach(input => {
    input.addEventListener("keyup", () => input.parentElement.classList.remove("error"))
})



