const passwordInput = document.getElementById('password-input');
const btn = document.getElementById('generate');
const lengthValue = document.getElementById('length-value');
const rangeLength = document.getElementById('range-length');
const checkUpper = document.getElementById('upper-case-check');
const checkLower = document.getElementById('lower-case-check');
const checkNumbers = document.getElementById('number-check');
const checkSymbols = document.getElementById('symbol-check');
const copy = document.getElementById('copy');

//SHOWING INPUT SLIDER VALUE
lengthValue.textContent = rangeLength.value;
rangeLength.addEventListener('input', () => {
    lengthValue.textContent = rangeLength.value;
})

checkLower.checked = true;
checkNumbers.checked = true;
checkSymbols.checked = true;

//GENERATE PASSWORD
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '!@#$%^&*()_+-=}{][\';|":?><,./~`';

btn.addEventListener('click', () => {
    passwordInput.value = generatePassword();
})

function generatePassword() {
    let password = "";
    let allChar = "";

    allChar += checkLower.checked ? lowerCase : "";
    allChar += checkUpper.checked ? upperCase : "";
    allChar += checkNumbers.checked ? numbers : "";
    allChar += checkSymbols.checked ? symbols : "";

    if (allChar == "" || allChar.length == 0) {
        return password;
    }

    let i = 1;
    while (i <= rangeLength.value) {
        password += allChar.charAt(Math.floor(Math.random() * allChar.length));
        i++;
    }
    return password;

    passwordInput.value = password;
}


//CHECK PASSWORD TYPE
// let check = document.getElementById('check-box');
// function checkPasswordType() {
//     check.addEventListener('click', () => {
//         if (passwordInput.type === 'text') {
//             passwordInput.type = 'password';
//             // console.log("hide")
//         } else {
//             passwordInput.type = 'text';
//             // console.log("show")
//         }
//     })
// }
// checkPasswordType();


//COPY PASSWORD 
function copyPassword() {
    copy.addEventListener('click', () => {
        if(passwordInput.value != "" || passwordInput.value.length >= 1) {
            navigator.clipboard.writeText(passwordInput.value);
            copy.innerText = "check";
            copy.title = "Password Copied";

            setTimeout(() => {
                copy.innerText = "content_copy";
                copy.title = "Copy Password";
            }, 2000);
        }
    })
}

copyPassword();