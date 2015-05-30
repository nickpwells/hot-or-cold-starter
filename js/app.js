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

      this.getUserNumber = function() {
        return +($('#guessList li:last-child').text());
      }

      //compare user and computer integer, return true or false
      function compareInts () {
        if (userInt === computerInt) {
          console.log("true");
          return true;
        }
        else {
          console.log('false');
          return false;
        }
      }
      
  	}

    //display warmer or colder
    var hotOrCold = function() {
      var difference = Math.abs(randomNumber - userGuess);

      if (difference >= 50) {window.alert("You're ice cold.");}
      if (40 <= difference < 50) {window.alert("You're cold, but not freezing.");}
      if (30 <= difference < 40) {window.alert("You're thawed out.");}
      if (20 <= difference < 30) {window.alert("You're around 70 degrees right now.  Better give it another shot.");}
      if (10 <= difference < 20) {window.alert("You better grab some water, it's gettin' hot.");}
      if (difference < 10) {window.alert("You're hot to the touch!  So close!");}
    }

    $('#guessButton').click(function(e){
        e.preventDefault();
        var userGuess = $('#userGuess').val();
        $('#guessList').append('<li>'+userGuess+'</li>');
        newGame.getUserNumber();
    });

    newGame();

});


