// Assignment code here
// V
var lCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var uCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var speclChar = ["/", "*", "-", "+", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "?", ";", ":", ".", "<", ">", "[", "]", "{", "}", "|"];
var allChar = [];
var guaranteedChars = [];
var passLength = 0;
function getRandom(arr) {
  // generate a random number based on the length of the array parameter
  // grab an element based on the randomly generated number ref 65
  // return the randomly generated element
  guaranteedChars.push(arr[Math.floor(Math.random() * arr.length)]);
};
// Getting Password Parameters
var getPassPerameters = function () {
  passLength = window.prompt("How many characters would you like your password to be? Between 8 and 128.")
  while (passLength < 8 || passLength > 128) {
    window.alert("Please, enter a number between 8 and 128.")
    passLength = prompt("How many characters would you like your password to be? Between 8 and 128.")
  }
  var lowerCase =
    window.confirm("Would you like your password to include lowercase letters?");

  var upperCase =
    window.confirm("Would you like your password to include UPPERCASE LETTERS?");

  var numeric =
    window.confirm("Would you like your password to include Numbers?");

  var specialChars =
    window.confirm("Would you like your password to include Special Characters?");
  // Generated password info object
  var generatedPasswordInfo = {
    passwordLength: parseInt(passLength),
    lowerCase: lowerCase,
    upperCase: upperCase,
    numeric: numeric,
    specialChars: specialChars
  };
  console.log("Set password length is " + passLength + " Characters")
  console.log(generatedPasswordInfo)
  // make sure at least one option is picked
  if (generatedPasswordInfo.upperCase === false && generatedPasswordInfo.lowerCase === false && generatedPasswordInfo.numeric === false && generatedPasswordInfo.specialChars === false) {
    window.alert("Please select at least one option")
    getPassPerameters();
  }
  // generate array for password generation
  if (generatedPasswordInfo.lowerCase) {
    allChar = allChar.concat(lCase);
    // add getRandom()
    getRandom(lCase);
    // add result of getRandom to guaranteedChars
  };
  if (generatedPasswordInfo.upperCase) {
    allChar = allChar.concat(uCase);
    getRandom(uCase);
  };
  if (generatedPasswordInfo.numeric) {
    allChar = allChar.concat(numbers);
    getRandom(numbers);
  };
  if (generatedPasswordInfo.specialChars) {
    allChar = allChar.concat(speclChar);
    getRandom(speclChar)
  };
  // generate password
  var generatedPasswordArr = [];
  // Generate random password
  var generatePassword = function () {
    for (var i = 0; i <= generatedPasswordInfo.passwordLength - 1; i++) {

      // console.log(Math.floor(Math.random() * allChar.length));
      generatedPasswordArr.push(allChar[Math.floor(Math.random() * allChar.length)]);
    };
    // splice the generatedPasswordArr
    generatedPasswordArr.splice(
      // Start splicing at the start of the generatedPasswordArr
      0,
      // Remove the lenght of the guaranteedChars from the generatedPasswordArr
      guaranteedChars.length,
      // insert the guaranteedChars Array
      guaranteedChars.join(""))
  }
  generatePassword();
  console.log("this is the guarenteedChars array " + guaranteedChars)
  console.log("this is the generated password array " + generatedPasswordArr)
  
  // Write password to the #password input
  function writePassword() {
    var password = generatedPasswordArr.join("");
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
  }
  writePassword();
  guaranteedChars = [];
  generatedPasswordArr = [];
  allChar = [];
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", getPassPerameters);

