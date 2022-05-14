// Assignment code here
var generatePassword = function () {
  var password = "test";
  //calls function to set the length variable
  var passwordLength = setPWLength();
  //calls function to generate the criteria object
  var passwordCriteria = setCriteria();
 

  return password;
};

var setPWLength = function () {
  //prompts for length of PW
  var input = window.prompt("Please enter a number between 1 and 128 to set the length of your new password.");
  input = parseInt(input);
  while (!input || input<1 || input>128) {
    window.alert("Please enter a valid number.");
    input = parseInt(window.prompt("Please enter a number between 1 and 128 to set the length of your new password."));
  }
  console.log("Password length set to: "+input);
  return input;
};

var setCriteria = function() {
  //creates object to hold all criteria, defaults to false
  var criteria = {
    lowercase: false,
    uppercase: false,
    numeric: false,
    specialchar: false
  };

  criteria.lowercase = lowercasePrompt();
  console.log(criteria);

  return criteria;
};

var lowercasePrompt = function () {
  var input = window.prompt("Should the password include lowercase letters? Y/N?")
  input = input.toLowerCase();
  while (input != "y" || input !="n") {
    window.alert("Please enter a valid response.")
    input = window.prompt("Should the password include lowercase letters? Y/N?").toLowerCase();
  }
  if (input === "y"){
    return true;
  }
  else if (input === "n") {
    return false;
  }
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
