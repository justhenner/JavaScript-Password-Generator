// Assignment code here
var generateBtn = document.querySelector("#generate");

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

var numbers = "1234567890";

var symbols = "!#$%&'()*+,-.?:;<=>?@[]\]^_`{|}~";

function generatePassword()
  console.log(randomNumber)

function uppercaseLetters = Math.floor(Math.random() * 26);
console.log(Numbers);

function lowercaseLetters = Math.floor(Math.random() * 26);



for (let i = 0; i < 8; i++) {
  
  var randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
  }
  return randomNumber

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

