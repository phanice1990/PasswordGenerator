// Character variables
var lettersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLowercase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var charactersToUse = "";

// Get references to the #generate element and #password input
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var generatedPassword = "";

  // Confirmation dialogues
  var lowercase = confirm("Would you like your password to have lowercase letters?");
  var uppercase = confirm("Would you like your password to have uppercase letters?");
  var includeNumbers = confirm("Would you like your password to have numbers?");
  var specialChars = confirm("Would you like your password to have special characters?");

  // Prompt for the password length
  var lengthOfPassword = prompt("Choose a password length in between 8 to 128 characters.");

  // Validate the password length
  if (lengthOfPassword < 8 || lengthOfPassword > 128 || isNaN(lengthOfPassword)) {
    alert("Invalid password length. Please choose a length between 8 and 128 characters.");
    return;
  }

  // Make sure at least one character type is selected
  if (!lowercase && !uppercase && !includeNumbers && !specialChars) {
    alert("Please select at least one character type.");
    return;
  }

  // Generate the password based on user's selections
  if (lowercase) {
    charactersToUse += lettersLowercase;
  }
  if (uppercase) {
    charactersToUse += lettersUppercase;
  }
  if (includeNumbers) {
    charactersToUse += numbers;
  }
  if (specialChars) {
    charactersToUse += specialCharacters;
  }

  // Select characters from charactersToUse string
  for (var i = 0; i < lengthOfPassword; i++) {
    generatedPassword += charactersToUse.charAt(Math.floor(Math.random() * charactersToUse.length));
  }

  // Display the generated password in the input field
  passwordText.value = generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);