const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", showError);
//check if the correct password is enterred
const checkPassWord = () => {
    const passWord = document.getElementById("password");
    const passRegex = /^(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    if (!passRegex.test(passWord.value)) {
        passWord.parentElement.classList.add("error"); 
        passWord.parentElement.nextElementSibling.style.display = "block";
        return passRegex.test(passWord.value);
    }
}
//Check if the correct email is enterred
const checkEmail = () => {
    const email = document.getElementById("email");
    const emailRegex = /^\w+@\w+/gi 
    if (!emailRegex.test(email.value)) {
        email.parentElement.classList.add("error");
        email.parentElement.nextElementSibling.style.display = "block";
        return emailRegex.test(email.value);
    }
}
//check if any text input is not empty
const checkText = () => {
    const arr = Array.from(document.querySelectorAll("input[type='text'"));
    arr.forEach((input) =>  {
        if(input.value === ""){
            input.parentElement.classList.add("error")
            input.parentElement.nextElementSibling.style.display = "block";
            return (input.value === "");
        }
    });
}
//Show errors on submit
function showError(e) {
    e.preventDefault();
    if (!checkText() || !checkEmail() || !checkPassWord()) {
        checkText();
        checkEmail();
        checkPassWord();
    }
}
//remove errors when typing in an input field
Array.from(inputs).forEach(input => {
    input.addEventListener("keyup", () => {
        input.parentElement.classList.remove("error")
        // console.log(input)
        input.parentElement.nextElementSibling.style.display = "none";
    })
})



