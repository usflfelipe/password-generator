// Assignment code here

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate password
function generatePassword() {
  var length = parseInt(prompt("How many characters would you like your password to contain? (Choose a value between 8 and 128)"));

// Checking if is a number between 8 and 128
if (isNaN(length) || length < 8 || length > 128) {
  alert("Please choose a valid number between 8 and 128.");
  return "";
  }

var uppercase = confirm("Would you like it to have capital letters?");
var lowercase = confirm("Would you like it to have lowercase letters?");
var numbers = confirm("Would you like it to have numbers?");
var specialChars = confirm("Would you like it to have special characters?");

// Check if one character type at least is selected
if (!uppercase && !lowercase && !numbers && !specialChars) {
  alert("Please select at least one character type.");
  return "";
  }

var password = "";
var charSet = "";

// Add selected character types
if (uppercase) {
  charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

if (lowercase) {
  charSet += "abcdefghijklmnopqrstuvwxyz";
  }
    
if (numbers) {
  charSet += "0123456789";
  }
    
if (specialChars) {
  charSet += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
    
// Generate random password
  for (var i = 0; i < length; i++) {
  password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
    
  return password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Change button text color
generateBtn.addEventListener('mouseover', function() {
  this.style.color = 'white';
  });
  
generateBtn.addEventListener('mouseout', function() {
this.style.color = '#4c4c4c';
});
