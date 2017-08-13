//Computer selects a random number between 19 and 120
//Each artist should be assigned a random number

$( document ).ready(function(){
//  console.log('my javascript is connected');
  var Random=Math.floor(Math.random()*101+19)

  $('#randomNumber').text(Random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//adds wins to userTotal
function goodJob(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
}
//adds losses to the userTotal
function youLost(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
}
//sets up click for artists
  $('#pac').on ('click', function(){
//    console.log('we are here')
    userTotal = userTotal + num1;
//    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
//if/ else statements for win/lose
        if (userTotal == Random){
          goodJob();
        }
        else if ( userTotal > Random){
          youLost();
        }
//Adding audio to each rapper on click
  //starting with Tupac
    //Will add audio later, unable to find single word wav files.
    //After finding songs suitable for each artist
      //-Isolate vocal samples in Logic Pro X or any other DAW and export
      //-Add each vocal file to assets folder
      //-Create on click function for each artist
//      var audioTupac = document.createElement("audio");
//        audioTupac.setAttribute("src", "Assets/tupac.wav");
//      
//        $("#pac").on("click", function() {
//          audioTupac.play();
//Repeat for each artist   
  })  
//repeat click and if/else for all aritsts
  $('#big').on ('click', function(){
    userTotal = userTotal + num2;
//    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          goodJob();
        }
        else if ( userTotal > Random){
          youLost();
        }
//      var audioBiggie = document.createElement("audio");
//        audioTupac.setAttribute("src", "Assets/biggie.wav");
//      
//        $("#big").on("click", function() {
//          audioBiggie.play();         
  })  
  $('#jay').on ('click', function(){
    userTotal = userTotal + num3;
//    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
          if (userTotal == Random){
          goodJob();
        }
        else if ( userTotal > Random){
          youLost();
        }
//      var audioJay = document.createElement("audio");
//        audioJay.setAttribute("src", "Assets/jayz.wav");
//      
//        $("#jay").on("click", function() {
//          audioTupac.play(); 
  })  
  $('#ye').on ('click', function(){
    userTotal = userTotal + num4;
//    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          goodJob();
        }
        else if ( userTotal > Random){
          youLost();
        }
//      var audioYe = document.createElement("audio");
//        audioTupac.setAttribute("src", "Assets/yeezy.wav");
//      
//        $("#jay").on("click", function() {
//          audioTupac.play();
  });

//NOTE: NO AUDIO FUNCTIONS WILL BE WORKING, NO ALIGNING ASSETS EXIST   

//resets the game
function reset(){
  Random=Math.floor(Math.random()*101+19);
//  console.log(Random)
      $('#randomNumber').text(Random);
          num1= Math.floor(Math.random()*11+1);
          num2= Math.floor(Math.random()*11+1);
          num3= Math.floor(Math.random()*11+1);
          num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
      $('#finalTotal').text(userTotal);
} 

}); 