/* // Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  (passwordLength = "NaN" || "null" || "undefined")
}
// Add event listener to generate button
generateBtn.onclick = writePassword; */

var countTypes = 0;
const requestedChar = [];
var requestedCharIndex = -1;
var passwordLength = 0;
password = "";
var passwordIndex = -1;

document.getElementById("generate").addEventListener("click",  function main() {
  passwordLength = Number(prompt("How many characters long? Must be between 8 and 128"))
    while ((passwordLength < 8) || (passwordLength > 128) || (passwordLength === "NaN") || (passwordLength === "null") || passwordLength === undefined){
      passwordLength = Number(prompt("Please enter a number between 8 and 128"))
    }
    console.log(passwordLength)
    while (countTypes == 0)  {
      var upper = confirm("Use upper case characters?");
      var lower = confirm("Use lower case characters?");
      var number = confirm("Use numbers?")
      var symbol = confirm("Use special characters?");

      if (upper == true) {
        countTypes++;
        requestedCharIndex++;
        requestedChar [requestedCharIndex] = "upper";
      }
      if (lower == true) {
        countTypes++;
        requestedCharIndex++;
        requestedChar [requestedCharIndex] = "lower";
      }
      if (number == true) {
        countTypes++;
        requestedCharIndex++;
        requestedChar [requestedCharIndex] = "number";
      }
      if (symbol == true) {
        countTypes++;
        requestedCharIndex++;
        requestedChar [requestedCharIndex] = "symbol";
      } 
    }
  
  document.getElementById("password").textContent = generatePassword();
} )

function generatePassword () {
    var includedUpper = false;
    var includedLower = false;
    var includedNumber = false;
    var includedSymbol = false;
    const length = [];
    var passwordChar = ""
  for ( var i=0; i < passwordLength; i++) {
    var charType = (Math.floor(Math.random() * countTypes))
    if (requestedChar[charType] == "upper") {
      passwordChar = getUpperCase();
      includedUpper = true;
    }
    if (requestedChar[charType] == "lower") {
      passwordChar = getLowerCase();
      includedlower = true;
    }
    if (requestedChar[charType] == "number") {
      passwordChar = getNumber();
      includedNumber = true;
    }
    if (requestedChar[charType] == "symbol") {
      passwordChar = getSymbol();
      includedSymbol = true;
    }
    passwordIndex++;
    password += passwordChar;
  }
  return password;
}

function getLowerCase() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)]
  }

function getUpperCase() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)]
}

function getNumber() {
  const number = '0123456789';
  return number[Math.floor(Math.random() * number.length)]
}

function getSymbol() {
  const symbol = ' !"#$%&()*+,-./:;<=>?@[\}^_`{|}~'
  return symbol[Math.floor(Math.random() * symbol.length)]
}