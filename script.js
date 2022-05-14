// Assignment code here
var generatePassword = function () {
  var password = "test";



  return password;
};


// Get references to the #generate element - links to generate button in HTML
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - links to textarea in HTML
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
