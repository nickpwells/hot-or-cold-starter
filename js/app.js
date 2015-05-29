$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var newGame = function(){
  		var randomNumber = Math.floor((Math.random() * 100) + 1);
      var userGuess = $("#userGuess").val();

      
  	}

});


