// Constants
const generateBtn = document.querySelector("#generate");

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(){

  let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerChar = "abcdefghijklmnopqrstuvwxyz";
  let numChar = "0123456789";
  let specChar = "!@#$%^&*()-_=+";

  let upperCharArr = upperChar.split("");
  let lowerCharArr = lowerChar.split("");
  let numCharArr = numChar.split("");
  let specCharArr = specChar.split("");
  
  // Password is currently blank! We need to make a better one
  let password = "";
  let CharArr = [];

  


  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//WHEN I click the button to generate a password  
//THEN I am presented with a series of prompts for password criteria

//WHEN prompted for password criteria
  //THEN I select which criteria to include in the password

  //WHEN prompted for the length of the password
  //THEN I choose a length of at least 8 characters and no more than 128 characters

  //WHEN prompted for character types to include in the password
  //THEN I choose lowercase, uppercase, numeric, and/or special characters

  //WHEN I answer each prompt
  //THEN my input should be validated and at least one character type should be selected

  //WHEN all prompts are answered
  //THEN a password is generated that matches the selected criteria