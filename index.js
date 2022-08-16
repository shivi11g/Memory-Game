var colors= ["pink", "blue", "green", "purple" ];
var chosenPattern=[];
let userPattern=[];
var userChosen;
var flag=0;
let length;

function next(){
   flag=0;
    level++;
    $("h1").text("Level " + level);
    var a= Math.random();
    var num= (Math.floor(a*4));
    var chosenColor= colors[num];
    chosenPattern.push(chosenColor);
    $("." + chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
     length= chosenPattern.length;
     animation(chosenColor);
     playSound(chosenColor);
}

$("button").click( function handler(){
    userChosen= $(this).attr("class");
    userPattern.push(userChosen);
    imp(userPattern.length -1);
    playSound(userChosen);
    // animation(userChosen);
});
function imp(index){
  if(userPattern[index]!= chosenPattern[index]){
    $("h1").text("game over!");
    flag=1;
    playSound("gameover");
    $("body").addClass("gameover");
 setTimeout(function(){
    $("body").removeClass("gameover")
 }, 1000);
  //  startover();
  }
if(flag==0 && userPattern.length == chosenPattern.length){
  userPattern=[];
  setTimeout(function(){ next();}, 1000);
}
}


  // function startover(){
  //   level=0;
  //   userPattern=[];
  //   chosenPattern=[];
  //   setTimeout(function(){ $("h1").text("press any key to restart"); }, 1000);
  // }
                      
  
function playSound(e){
    var audio = new Audio("sounds/" + e +".wav");
    audio.play();
}
function animation(curr){
    console.log(curr);
 $("."+ curr).addClass("pressed");
 setTimeout(function(){
    $("."+ curr).removeClass("pressed")
 }, 100);
}
var level= 0;
$(document).keypress(function(e){
    $("h1").text("Level "+ level);
    next();
})



   






