$(document).ready(function(){

  //declare count in order to replace #count in HTML
  var count = 0;
  var differenceTracker = [];
    

	
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
        count += 1;
        $('#count').replaceWith("<span id='count'>" + count + "</span>");
        var currentDifference = hotOrCold(computerInt, userNumber);//makes sure to run hotOrCold only when input is valid
        differenceTracker.push(currentDifference);
        var previousDifference = differenceTracker[differenceTracker.length - 2];
      }
      else{
        window.alert('It looks like your input is invalid. Please enter a whole number between 1-100');
        return false;
      }

      console.log(previousDifference);
      console.log(currentDifference);
      console.log(differenceTracker);

      //compare user and computer numbers
      function hotOrCold(number1, number2) {  
        var difference = Math.abs(number1 - number2);

        if (difference == 0) {
          window.alert("You got it!  Well done.  Click 'New Game' to play again");
          return difference;
        }
        else if (count > 1){
          return difference;
        }
        else{
          window.alert('Keep guessing and I will tell if you are hotter or colder.');
          return difference;
        }
        
      }

      //give user feedback if their guess was hotter or colder
      function hotterOrColder(currentValue, previousValue) {
        if (currentValue < previousValue) {
          window.alert('Hotter');
        }
        else {
          window.alert('Colder');
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
    var computerInt = newGame();
    console.log(computerInt);

    //creates new game when user clicks new game button
    $('.new').click(function(){
      
      var computerInt = newGame();
      console.log(computerInt);
      
      var differenceTracker = [];
      console.log(differenceTracker);

      var count = 0;

      $('#guessList li').remove();
    });


});

