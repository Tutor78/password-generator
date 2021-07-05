// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//  generate password function that will write the final password to the website
var generatePassword = function() {
  // prompts the user to choose the length of their password and converts it into an integer
  var passLength = window.prompt("How long would you like your password to be? Please choose between 8 and 128 characters?");

  // defines the arrays that correspond to each confirm
  var specialChar = ["!", "@", "#", "$", "%", "^", "&"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // defines the list of characters to choose from
  var passwordChar = [];

    // check to see if the chosen length is in the correct parameters
  if (passLength >= 8 && passLength <= 128){
    // logic for generating a random password
    // asks if the user what kind of characters they want to use in the password
    var isSpecialChar = window.confirm("Would you like to include special characters? (@, $, !, etc.)");
    var isNumber = window.confirm("Would you like to include numbers in your password?");
    var isLowerCase = window.confirm("Would you like to include lowercase letters in your password?");
    var isUpperCase = window.confirm("Would you like to include upper case letters in your password?");

    // checks to see if the user wants special characters and concatenates the array specialChar to passwordChar
    if (isSpecialChar) {
      passwordChar = passwordChar.concat(specialChar);
    }

    // check to see if the user wants to include numbers and concatenates the corresponding array numbers to passwordChar
    if (isNumber) {
      passwordChar = passwordChar.concat(numbers);
    }

    // check to see if the user wants to include lower case letter and concatenates the lowerCase array to passwordChar
    if (isLowerCase) {
      passwordChar = passwordChar.concat(lowerCase);
    }

    // check to see if the user wants upper case letters and concatenates the upperCase array to passwordChar
    if (isUpperCase) {
      passwordChar = passwordChar.concat(upperCase);
    }
  // reruns the function if a correct number is not picked
  } else {
    generatePassword();
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

