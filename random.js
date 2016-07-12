//Welcome message
alert("Welcome to the random number generator");


//Prompt user for limits
var lower = parseInt(prompt("Please enter the lower limit"));
var upper = parseInt(prompt("Please enter the upper limit"));

//random number generator
  
  //Check that limits are numbers
function getRandomNumber( lower, upper ) { 
  if ( isNaN(lower) || isNaN(upper) ) { 
    throw new Error('Both arguments must be numbers'); 
  } 
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}



document.write(getRandomNumber(lower,upper));

