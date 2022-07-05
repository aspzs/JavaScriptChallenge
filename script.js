//We create the var for the passwords so we can modify the text area in our html page
var password = document.getElementById("password");
//I used chars for all the characters that we want to use 
var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@&%_-*.,";
//The length for our password
var passwordLength = 12;
var password = "";

//I used the loop for and math.random so this function can gives us a random number with the criteria that we put above
for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }

 //This is the final code, what gonna shows up the random password inside the box
 //I gave the value to password, our first variable above the code
 document.getElementById("password").value = password;
