$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    //start a new game
  	var newGame = function(){

      //computer generates random number
      function generateRandomNumber() {
        var randomNumber = Math.floor((Math.random() * 100) + 1);
        return randomNumber;
      } 
      
      var computerInt = generateRandomNumber();
      return computerInt;
  	}

    var computerInt = newGame();
    console.log(computerInt);

    //grab user's input
    var getUserNumber = function(){
      
      //gather and parse user input
      var userInput = $('#userGuess').val();
      $('#userGuess').val('');
      var userNumber = +(parseInt(userInput));
      
      //test user's input
      function testInput() {
        if ((userNumber < 1) || (userNumber > 100)){
          return false;
        }
        else {
          return true;
        }
      }

      var inputChecker = testInput();
      if (inputChecker) {
        $('#guessList').append('<li>'+userNumber+'</li>');
        hotOrCold(computerInt, userNumber);//makes sure to run hotOrCold only when input is valid
      }
      else{
        window.alert('It looks like your input is invalid. Please enter a whole number between 1-100');
        return false;
      }

      //compare user and computer numbers
      function hotOrCold(number1, number2) {  
        var difference = Math.abs(number1 - number2);
        console.log(number1);
        console.log(number2);
        console.log(difference);
        if (difference >= 50) {window.alert("ice cold");}
        else if (40 <= difference && difference < 50) {window.alert("cold");}
        else if (30 <= difference && difference < 40) {window.alert("lukewarm");}
        else if (20 <= difference && difference < 30) {window.alert("warm");}
        else if (10 <= difference && difference < 20) {window.alert("hot");}
        else if (1 <= difference && difference < 10) {window.alert("on fire");}
        else {window.alert("You guessed right! Congratulations.  Click 'New Game' to play again.");}
      }
    }
    
    $('form').submit(function(e){
      e.preventDefault();
      getUserNumber();
    });

});

