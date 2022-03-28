var passwordLength = 10;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '^', '&', '*', '(', ')'];
var lowerCassArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// promp user for password criteria
// passlength = 10
// characters
// validate input
// generate password
// display password (return)

var password = generatePassword();

function generatePassword() {
    var password = "";
    for (var i = 0; i < passwordLength, i++;) {
        var randomIndex = math.floor(math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
        return password;
    }
}
// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts();
    var passwordText = document.querySelector("#password");

    if (correctPrompts) {
        var password = generatePassword();
        passwordText.value = password;
    } else {
        passwordText.value = "";
    }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getPrompts() {
    choiceArr = [];
    passwordLength = parseInt(prompt("How many characters do you want?"));

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Password length has to be a number 8-128.");
        return false;
    }
    if (confirm("Would you like upper case letters?")) {
        choiceArr = choiceArr.concat(upperCaseArr);
    }
    if (confirm("Would you like lower case letters?")) {
        choiceArr = choiceArr.concat(lowerCassArr);
    }
    if (confirm("Would you like special characters?")) {
        choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("Would you like numbers?")) {
        choiceArr = choiceArr.concat(numberArr);
    }
    return true;
}
