// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//MAIN FUNCTION
var generatePassword = function(){
   //local variables 
  var newArray = [];
  
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
  userLength = prompt('Enter your desired password length between 8-128 chars');
  console.log(userLength)
  
  //4 "confirm" prompts asking user for true false//if true push that array to new empty array
  if (confirm("Do you want upper case characters?")) {
    newArray.push(...upper);
  } else {
    txt = "You pressed Cancel!";
  }

  if (confirm("Do you want lower case characters?")) {
    newArray.push(...lower);
  } else {
    txt = "You pressed Cancel!";
  }

  if (confirm("Do you want special characters?")) {
    newArray.push(...special);
  } else {
    txt = "You pressed Cancel!";
  }

  if (confirm("Do you want numbers?")) {
    newArray.push(...numbers);
  } else {
    txt = "You pressed Cancel!";
  };
  //console.log(newArray)
  //console.log(userLength)
  
  //final array each random letter is sent to
  finalPassword = [];
  
  //loop for userLength amount of times// generating a random index one time each loop
  for (i = 0; i < userLength; i++){
     finalPassword.push(newArray[Math.floor(Math.random() * newArray.length)]);
  }
  
 
  //hoisting finalpassword to top//removing commas and turning array into string
  return finalPassword.join("");

};

generateBtn.addEventListener("click", writePassword);  



 /* userLength = prompt('Enter your desired password length between 8-128 chars');
  console.log(userLength)
  userUpper = prompt('Would you like to include upper case letter?');
  console.log(userUpper)
  userLower = prompt('Would you like to include lower case letters?');
  console.log(userLower)
  userSpecial = prompt('Would you like to include special characters?');
  console.log(userSpecial)
  userNumbers = prompt('Would you like to include numbers?');
  console.log(userNumbers)

  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }


  if (userUpper) {
    newArray.push(...upper);
  };
  if (userLower) {
    newArray.push(...lower);
  };
  if (userSpecial) {
    newArray.push(...special);
  };
  if (userNumbers) {
    newArray.push(...numbers);
  };

  if(userLength >= 8 && userLength <= 128) {
    newArray[Math.floor(Math.random() * userLength)];
 */
