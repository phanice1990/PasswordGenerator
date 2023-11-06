// character variables
var lettersUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLowercase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var charactersToUse = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  alert('hi');

  var password = generatePassword();
  passwordText.value = password;

  // confirmation dialogues
  var lowercase =       confirm("Would you like your password to have lowercase letters?");
  var uppercase =       confirm("Would you like your password to have uppercase letters?");
  var numbers =         confirm("Would you like your password to have numbers?");
  var specialChars =    confirm("Would you like your password to have special characters?");
  var lengthOfPassword= prompt("Choose a password with a length in between 8 to 150 characters.");

  // Confirm the password length
  if (lengthOfPassword > 150 || lengthOfPassword < 8) {
    alert("Password is not in between 8 to 150 characters. Kindly update your input");
    var lengthOfPassword = prompt("Choose a password with a length in between 8 to 150 characters.");
    return "";
  }

  // when no selection has been chosen from the prompts
  else if (!lowercase && !uppercase && !numbers && !specialChars) {
    alert("Please select one of the previous character choices.");
    var lowercase = confirm("Would you like your password to have lowercase letters?");
    var uppercase = confirm("Would you like your password to have uppercase letters?");
    var numbers = confirm("Would you like your password to have numbers?");
    var specialChars = confirm("Would you like your password to have special characters?");
    return "";
  }

  // generate the password depending on the user's selections
  if (lowercase) {
    charactersToUse += lettersLowercase;
  }
  if (uppercase) {
    charactersToUse += lettersUppercase;
  }
  if (numbers) {
    charactersToUse += numbers;
  }
  if (specialChars) {
    charactersToUse += specialCharacters;
  }

  // Select characters from charactersToUse string 
  for (var i = 0; i < lengthOfPassword; i++) {
    generatedPassword += charactersToUse.charAt(Math.floor(Math.random() * charactersToUse.length));
  }
  passwordText.value = generatedPassword;
  var password = generatePassword();

}

// Call the onPageload function when the page loads
window.addEventListener("load", writePassword);
generateBtn.addEventListener("click", writePassword);
