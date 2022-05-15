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
  //calls functions to set each criteria to true or false
  criteria.lowercase = yesOrNoPrompt("Should the password include lowercase letters? Y/N?");
  criteria.uppercase = yesOrNoPrompt("Should the password include uppercase letters? Y/N?");
  criteria.numeric = yesOrNoPrompt("Should the password include numbers? Y/N?");
  criteria.specialchar = yesOrNoPrompt("Should the password contain any special characters? Y/N?");

  console.log(criteria);

  return criteria;
};

//Displays given message and only accepts a y or n response
var yesOrNoPrompt = function (message) {
  var input = window.prompt(message)
  //if the user clicks cancel, input becomes a null value
  if (input === null) {
    return false;
  }
  else {
    //converts input to lowercase
    input = input.toLowerCase();
  }
  //while loop uses the condition that should be met (input must be either "y" or "n") and inverts it with ! 
  //to validate the input until user enters correct value
  while (!(input === "y" || input === "n")) {
    window.alert("Please enter a valid response.")
    var input = window.prompt(message)
    if (input === null) {
      break;
    }
    else {
      input = input.toLowerCase();
    }
  }
  if (input === "y") {
    return true;
  }
  else {
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
