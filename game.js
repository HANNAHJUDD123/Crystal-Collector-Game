$(document).ready(function() {

// create my var's to start the game
var wins = 0;
var losses = 0;
var computerRanNum = Math.floor(Math.random()*101+19);
var userTotal = 0;

function crystalsRanNum() { return Math.ceil(Math.random()*11); }


function randomCrystalNumbers() {
  $('.crystalsPics').each(function(){
    $(this).data("number", crystalsRanNum());
  });
}


randomCrystalNumbers()


$('#computerRanNum').text(computerRanNum);
$('#numberWins').text(wins);
$('#numberLosses').text(losses);



  function end() {
    let self = this;
    setTimeout(function() { self.reset(); }, 1000);
}


//resets the game
function reset(){
      computerRanNum=Math.floor(Math.random()*101+19);
      $('#computerRanNum').text(computerRanNum);
      randomCrystalNumbers() 
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      end()
      }



 $('.crystalsPics').on ('click', function(){
    userTotal = userTotal + $(this).data("number");
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal === computerRanNum) {
          $('#status').text('You won!!!!')
          wins ++;
          $('#win').text(wins);
          console.log('you WON ' + wins)
          randomCrystalNumbers();
          reset()
        } else if ( userTotal > computerRanNum) {
          $('#status').text('You lost!')
            losses ++;
            $('#losses').text(losses);
            console.log("you lost " + losses)
            randomCrystalNumbers();
            reset()
        }  
    });


       
});





