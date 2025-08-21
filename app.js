const passwordInput = document.getElementById('password-input');
const btn = document.getElementById('generate');
let checkUpper = document.getElementById('upper-case-check');
let checkLower = document.getElementById('lower-case-check');
let checkNumbers = document.getElementById('number-check');
let checkSymbols = document.getElementById('symbol-check');
let copy = document.getElementById('copy');

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
    while (i < 12) {
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
        passwordInput.select();
        passwordInput.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand("copy");
    })
}

copyPassword();