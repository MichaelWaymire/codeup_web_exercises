"use strict";

alert("Welcome to my webpage!");

// // promopt for colore + aleart w/response
//
// var color = prompt('What is your favorite color?');
// console.log('What is your favorite color?' + color);
//
//
// alert("Great, " + color + " is my favorite too!");
//
// // Step 3
//
// //Movies
// // You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear
// // (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// // If price for a movie per day is $3, how much will you have to pay?
// var theLittleMermaid = prompt("How many days did you rent The Little Mermaid?");
// var brotherBear = prompt("How many days did you rent Brother Bear?");
// var hercules = prompt("How many days did you rent Hercules?");
// var payable = 3;
// var totalDay = (theLittleMermaid * payable) + (brotherBear * payable) + (hercules * payable);
//
// alert("You owe " + totalDay);
//
//
// // alert("I rented 3 movies; The Little Mermaid for " + theLittleMermaid + " days, Brother Bear for " +
// //     brotherBear + " days, and Hercules for " + hercules + " day." + " The total came out to $" + mtotal);
//
// //Amazon, Facebook, Google Pay
// // Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
// // they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// // How much will you receive in payment for this week? You worked 10 hours for Facebook, 6
// // hours for Google and 4 hours for Amazon.
//
// var google = prompt("How much did Google pay?");
// var amazon = prompt("How much did Amazon pay?");
// var facebook = prompt("How much did Facebook pay?");
// var ghours = prompt("How many hours did you work for Google?");
// var ahours = prompt("How many hours did you work for Amazon?");
// var fhours = prompt("How many hours did you work for Facebook");
// var pay = (google * ghours) + (amazon * ahours) + (facebook * fhours);
// alert("My combined income working for Google, Amazon and Facebook equals to $" + pay);

//Student
// A student can be enrolled to a class only if the class is not full and the class
// schedule does not conflict with her current schedule.
var student = true;
var classfull = false;
var classaval = true;
var conschedule = false;
var gotIn = student || classaval && classfull && conschedule;
alert("Yatta!");



// A product offer can be applied only if people buys more than 2 items, and the
// offer has not expired. Premium members do not need to buy a specific amount of products.
var buy1  = false


var username = "codeup";
var password = "notasstrongpassword";

var passwrodIsLongEnough = password.length >= 5;

var passwordIsNotUsername = password.includes(username);
var usernameIsShortEnough = username.length <= 20;
var userNameHasWhiteSpace = username.trim() !=username;
var passwordHasWhiteSpace = password.trim() !=password;

var noWhiteSpace = username == username.trim() && password == password.trim()

var credintialsAreGood = noWhiteSpace && !usernameIsShortEnough && !passwordIsNotUsername && passwrodIsLongEnough;

alert(credintialsAreGood)