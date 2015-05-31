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
    var getUserNumber = function(randomInt){
      
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
      }
      else{
        window.alert('It looks like your input is invalid. Please enter a whole number between 1-100');
      }

      //compare user and computer numbers
      var hotOrCold = function(number1, number2) {
        var difference = Math.abs(number1 - number2);

        if (difference >= 50) {window.alert("You're ice cold.");}
        if (40 <= difference < 50) {window.alert("You're cold, but not freezing.");}
        if (30 <= difference < 40) {window.alert("You're thawed out.");}
        if (20 <= difference < 30) {window.alert("You're around 70 degrees right now.  Better give it another shot.");}
        if (10 <= difference < 20) {window.alert("You better grab some water, it's gettin' hot.");}
        if (difference < 10) {window.alert("You're hot to the touch!  So close!");}
    }
      hotOrCold()
      //return +($("#guessList li:last-child").text());
    }
    
    $('form').submit(function(e){
      e.preventDefault();
      getUserNumber();
    });

});

