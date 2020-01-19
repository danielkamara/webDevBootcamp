// userAge = prompt("How old are you?");

// var days = userAge * 365.25;





// alert( userAge + " years is roughly " + days + " days old." );



// Age Exercise using  JS Conditionals

// var userAge = prompt("How old are you?");

// if (userAge <= 0) {
//     alert("That's not your age!!!");

// } else if (userAge === 21) {
//     alert("Happy 21's Birthday!!!");

// } else if (userAge % 2 !== 0 ) {
// alert("Your age is odd!");
// }
//    else if(userAge % Math.sqrt(userAge) === 0) {
// alert("Perfect Square!");
//    }


// Get age and convert it to a Number (prompt always returns a String)

var age = Number(prompt("What is your age?"));

// If age is negative
if (age < 0) {
    console.log("Come back once you're out of the womb");
}

// If age is 21  
if (age === 21) {
    console.log("Happy 21st Birthday!");
}

// If age is odd
//(not evenly divisible by two)
if (age % 2 !== 0) {
    console.log("Your age is odd!");
}

// If age is a perfect square
if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}
