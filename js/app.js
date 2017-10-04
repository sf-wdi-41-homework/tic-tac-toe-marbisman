// wait for the DOM to finish loading
$(document).ready(function() {

  var turns = 0;
  var x = "x";
  var o = "o";
//GET the divs
  $("#board div").on("click", function(){

// all ways for o to win

  if ($("#boxOne").hasClass('o') && $("#boxTwo").hasClass('o') && $("#boxThree").hasClass('o') ||
  $("#boxFour").hasClass('o') && $("#boxFive").hasClass('o') && $("#boxSix").hasClass('o') ||
  $("#boxSeven").hasClass('o') && $("#boxEight").hasClass('o') && $("#boxNine").hasClass('o') ||
  $("#boxOne").hasClass('o') && $("#boxFour").hasClass('o') && $("#boxSeven").hasClass('o') ||
  $("#boxTwo").hasClass('o') && $("#boxFive").hasClass('o') && $("#boxEight").hasClass('o') ||
  $("#boxThree").hasClass('o') && $("#boxSix").hasClass('o') && $("#boxNine").hasClass('o') ||
  $("#boxOne").hasClass('o') && $("#boxFive").hasClass('o') && $("#boxNine").hasClass('o') ||
  $("#boxThree").hasClass('o') && $("#boxFive").hasClass('o') && $("#boxSeven").hasClass('o')

  ){
    //alert winner and reset
    alert('O wins!');
  	$("#board").removeClass('squarePlayed');
  	$("#board").removeClass('o');
  	$("#board").removeClass('x');

  // all ways for x to win
}else if ($("#boxOne").hasClass('x') && $("#boxTwo").hasClass('x') && $("#boxThree").hasClass('x') ||
  $("#boxFour").hasClass('x') && $("#boxFive").hasClass('x') && $("#boxSix").hasClass('x') ||
  $("#boxSeven").hasClass('x') && $("#boxEight").hasClass('x') && $("#boxNine").hasClass('x') ||
  $("#boxOne").hasClass('x') && $("#boxFour").hasClass('x') && $("#boxSeven").hasClass('x') ||
  $("#boxeTwo").hasClass('x') && $("#boxFive").hasClass('x') && $("#boxEight").hasClass('x') ||
  $("#boxThree").hasClass('x') && $("#boxSix").hasClass('x') && $("#boxNine").hasClass('x') ||
  $("#boxOne").hasClass('x') && $("#boxFive").hasClass('x') && $("#boxNine").hasClass('x') ||
  $("#boxThree").hasClass('x') && $("#boxFive").hasClass('x') && $("#boxSeven").hasClass('x')

  ){
  //alert winner and reset
    alert('X wins!');
  	$("#board").removeClass('squarePlayed');
  	$("#board").removeClass('o');
  	$("#board").removeClass('x');

  // if the game ends up a tie, alert
}else if (turns == 9){
  	alert('Its a tie.');
  	$("#board").removeClass('squarePlayed');
  	$("#board").removeClass('o');
  	$("#board").removeClass('x');
  	turns = 0;

  // if user selects a square that is already secleted
}else if ($(this).hasClass('squarePlayed')){
      alert('Already selected');

 // change turns for players
 }else if(turns%2 === 0){
                 turns++;
                 $(this).text(o);
                 $(this).addClass('squarePlayed o');
                 if ($("#boxOne").hasClass('x') && $("#boxTwo").hasClass('x') && $("#boxThree").hasClass('x') ||
                 $("#boxFour").hasClass('x') && $("#boxFive").hasClass('x') && $("#boxSix").hasClass('x') ||
                 $("#boxSeven").hasClass('x') && $("#boxEight").hasClass('x') && $("#boxNine").hasClass('x') ||
                 $("#boxOne").hasClass('x') && $("#boxFour").hasClass('x') && $("#boxSeven").hasClass('x') ||
                 $("#boxeTwo").hasClass('x') && $("#boxFive").hasClass('x') && $("#boxEight").hasClass('x') ||
                 $("#boxThree").hasClass('x') && $("#boxSix").hasClass('x') && $("#boxNine").hasClass('x') ||
                 $("#boxOne").hasClass('x') && $("#boxFive").hasClass('x') && $("#boxNine").hasClass('x') ||
                 $("#boxThree").hasClass('x') && $("#boxFive").hasClass('x') && $("#boxSeven").hasClass('x')
               ){
                    alert('Winner: x');
                    turns=0;
                }
            }else{
                turns++;
                 $(this).text(x);
                 $(this).addClass('squarePlayed x');
                 if ($("#boxOne").hasClass('o') && $("#boxTwo").hasClass('o') && $("#boxThree").hasClass('o') ||
                 $("#boxFour").hasClass('o') && $("#boxFive").hasClass('o') && $("#boxSix").hasClass('o') ||
                 $("#boxSeven").hasClass('o') && $("#boxEight").hasClass('o') && $("#boxNine").hasClass('o') ||
                 $("#boxOne").hasClass('o') && $("#boxFour").hasClass('o') && $("#boxSeven").hasClass('o') ||
                 $("#boxTwo").hasClass('o') && $("#boxFive").hasClass('o') && $("#boxEight").hasClass('o') ||
                 $("#boxThree").hasClass('o') && $("#boxSix").hasClass('o') && $("#boxNine").hasClass('o') ||
                 $("#boxOne").hasClass('o') && $("#boxFive").hasClass('o') && $("#boxNine").hasClass('o') ||
                 $("#boxThree").hasClass('o') && $("#boxFive").hasClass('o') && $("#boxSeven").hasClass('o')
               ){
                   alert('Winner: o');
                    turns=0;

                }
            }
         });
//reset button
    $("#reset").click(function () {
  	  $("#board").removeClass('squarePlayed');
  	  $("#board").removeClass('o')
  	  $("#board").removeClass('x')
  	   count = 0;
     });
});
