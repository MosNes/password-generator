// Assignment code here

//variables to store the different charsets for the criteria to pull from.
//Got basic idea from https://stackoverflow.com/questions/1497481/javascript-password-generator answer posted by user: Gumbo
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters =  lowercaseLetters.toUpperCase();
var numbers = "0123456789";
var specialCharacters = "~!@#$%^&*().+-";

//function that randomly returns a single character from the chosen charset
var randomChar = function(charset){

  char = charset.charAt(Math.floor(Math.random()*charset.length));
  return char;

};

//function that inserts a string character into a random location within the specified string
//modified from https://stackoverflow.com/questions/4364881/inserting-string-at-position-x-of-another-string answer posted by user: nickf
var insertChar = function(string, newChar) {
  //randomly determines an insertion point based on the string length
  insertionPoint = Math.floor(Math.random()*string.length);
  //inserts the new character at the index = to the insertion point
  output = string.substring(0,insertionPoint)+newChar+string.substring(insertionPoint);
  return output;
};

var setPWLength = function () {
  //prompts for length of PW
  var input = window.prompt("Please enter a number between 8 and 128 to set the length of your new password.");
  //converts input to number from string
  input = parseInt(input);
  //re-prompts for valid input until input matches the criteria
  while (!input || input<8 || input>128) {
    window.alert("Please enter a valid number.");
    input = parseInt(window.prompt("Please enter a number between 8 and 128 to set the length of your new password."));
  }
  console.log("Password length set to: "+input);
  return input;
};

var setCriteria = function() {
  //creates object to hold all password criteria for the character sets, defaults to false
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

//Function that Displays given message and only accepts a y or n response
var yesOrNoPrompt = function (message) {
  var input = window.prompt(message);
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
    input = window.prompt(message);
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

//function to call other functions to assemble criteria and generate the password
var generatePassword = function () {
  //empty placeholder variables to be appended to later
  var password = "";
  var potentialCharacterSet = "";
  //calls function to set the length variable
  var passwordLength = setPWLength();
  //calls function to generate the criteria object
  var passwordCriteria = setCriteria();
  //validates that at least 1 criteria is true. If all are false, no password can be generated.
  if (passwordCriteria.lowercase === false && passwordCriteria.uppercase === false 
    && passwordCriteria.numeric === false && passwordCriteria.specialchar === false){
      window.alert("Please select at least 1 criteria to generate a password.");
      passwordCriteria = setCriteria();
  }
  // makes sure a single lowercase character is added to the pw, then adds the lowercase alphabet to the characterset pool
  if (passwordCriteria.lowercase){
    password+=randomChar(lowercaseLetters);
    potentialCharacterSet+=lowercaseLetters;
    console.log("Adding lowercase character: "+password);
    console.log("New potential character set: "+potentialCharacterSet);
  }
    // makes sure a single uppercase character is added to the pw, then adds the uppercase alphabet to the characterset pool
  if (passwordCriteria.uppercase){
    password+=randomChar(uppercaseLetters);
    potentialCharacterSet+=uppercaseLetters;
    console.log("Adding uppercase character: "+password);
    console.log("New potential character set: "+potentialCharacterSet);
  }
  //makes sure a single number is added to the pw, then adds numbers to the characterset pool
  if (passwordCriteria.numeric){
    password+=randomChar(numbers);
    potentialCharacterSet+=numbers;
    console.log("Adding number: "+password);
    console.log("New potential character set: "+potentialCharacterSet);
  }
  //makes sure a single special char is added to the pw, then adds special characters to the characterset pool
  if (passwordCriteria.specialchar){
    password+=randomChar(specialCharacters);
    potentialCharacterSet+=specialCharacters;
    console.log("Adding Special character: "+password);
    console.log("New potential character set: "+potentialCharacterSet);
  }
  // gets the remaining length of the pw after the above characters have been added
  remainingLength = passwordLength-password.length;

  // adds a random character from the pool until the password reaches the required length
  for (i = 0; i < remainingLength; i++) {
    password = insertChar(password, randomChar(potentialCharacterSet));
    console.log("IT GROWS IN COMPLEXITY: "+password);
  }

  return password;
};

//Starter Code Below:

// Get references to the #generate element - links to generate button in HTML
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - links to textarea in HTML
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
