// Assignment code here

var passwordLength;
var passwordLower;
var passwordUpper;
var passwordNumeric;
var passwordSpecial;
var attributesGood;


// Class to hold password attributes
class passwordAtt{
  constructor(length, lowers, uppers, numerics, specials){
    this.length = length;
    this.lowers = lowers;
    this.uppers = uppers;
    this.numerics = numerics;
    this.specials = specials;
  }
}

// Function for gathering password critera with windows and constructing the passwordAtt
function gatherCritera() {

    // Gather password critera (length = 8-128 chars)
    const length = Number(window.prompt("Please enter length of password between 8-128 characters:", ""));
    var goodLength;
    if(length >= 8 && length <= 128){
      passwordLength = length;
      // console.log("password length : " + passwordLength);
      goodLength = true;
    }
  
    // Gather password critera (lower, upper, numeric, special characters)
    var lower = window.confirm("Include lower case characters in password?");
    passwordLower = lower;
    // console.log(passwordLower);
  
    var upper = window.confirm("Include upper case characters in password?");
    passwordUpper = upper;
    // console.log(passwordUpper);
  
    var numeric = window.confirm("Include numeric characters in password?");
    passwordNumeric = numeric;
    // console.log(passwordNumeric);
  
    var special = window.confirm("Incluse special characters in password?");
    passwordSpecial = special;
    // console.log(passwordSpecial);
  
    if(goodLength){
      if( lower || upper || numeric || special){
        attributesGood = true;
        // console.log("The attributes are passable. attributesGood = " + attributesGood);
      }
      else {
        attributesGood = false;
        // console.log("The attributes are NOT passable. A character type was not selected. attributesGood = " + attributesGood);  
      }
      
    }
    else 
    { attributesGood = false;
      // console.log("The attributes are NOT passable. Password Length too short. attributesGood = " + attributesGood);  
    }
  
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
