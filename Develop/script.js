// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var password = "";

  for (var i = 0; i < 12; i++) {
    var randomSymbol = Math.floor(Math.random() * (126 - 33)) + 33;
    password += String.fromCharCode(randomSymbol);
  }
  return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
