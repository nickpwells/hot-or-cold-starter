$(document).ready(function(){

  //declare variable

  function variableDeclare(){
    differenceTracker = [];
  }
  
  
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
        console.log(randomNumber);
        return randomNumber;
      } 
      
      return generateRandomNumber();
  	}

    //grab user's input
    var getUserNumber = function(){
      
      //gather and parse user input
      var userInput = $('#userGuess').val();
      $('#userGuess').val('');
      var userNumber = parseInt(userInput);
      
      //test user's input
      function testInput() {
        if (((userNumber < 1) || (userNumber > 100)) || isNaN(userNumber)){
          return false;
        }
        else {
          return true;
        }
      }

      var inputChecker = testInput();

      if (inputChecker) {
        $('#guessList').append('<li>'+userNumber+'</li>');
        var currentDifference = hotOrCold(computerInt, userNumber);//makes sure to run hotOrCold only when input is valid
        differenceTracker.push(currentDifference);
        var previousDifference = differenceTracker[differenceTracker.length - 2];
        $('#count').replaceWith("<span id='count'>" + differenceTracker.length + "</span>");
      }
      else{
        $('#feedback').replaceWith("<h2 id='feedback'>"+'It looks like your input is invalid. Please enter a whole number between 1-100'+"</h2>");
        return false;
      }

      //compare user and computer numbers
      function hotOrCold(number1, number2) {  
        var difference = Math.abs(number1 - number2);

        if (difference == 0) {
          $('#feedback').replaceWith("<h2 id='feedback'>"+ "You got it!  Well done.  Click 'New Game' to play again" + "</h2>");
          return difference;
        }
        else if (differenceTracker.length > 0){
          return difference;
        }
        else{
          $('#feedback').replaceWith("<h2 id='feedback'>"+ 'Keep guessing and I will tell if you are hotter or colder.' + "</h2>");
          return difference;
        }
        
      }

      //give user feedback if their guess was hotter or colder
      function hotterOrColder(currentValue, previousValue) {
        if (currentValue < previousValue) {
          $('#feedback').replaceWith("<h2 id='feedback'>"+'Hotter'+"</h2>");
        }
        else {
          $('#feedback').replaceWith("<h2 id='feedback'>"+'Colder'+"</h2>");
          }
      }

      //makes sure hotterOrColder only runs once the user has guessed a second time
      if (differenceTracker.length > 1 && currentDifference != 0) {
        hotterOrColder(currentDifference, previousDifference);
      }

    }
    
    $('form').submit(function(e){
      e.preventDefault();
      getUserNumber();
    });

    //creates new game when page loads
    computerInt = newGame();
    variableDeclare();

    //creates new game when user clicks new game button
    $('.new').click(function(){
      computerInt = newGame();
      variableDeclare();
      $('#guessList li').remove();
      $('#count').replaceWith("<span id='count'>" + differenceTracker.length + "</span>");
      $('#feedback').replaceWith("<h2 id='feedback'>"+ "Make Your Guess!" + "</h2>");
    });

});

