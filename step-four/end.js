"use strict"

function endGame(){
    let modal = document.getElementById("popup1")
    modal.classList.add("show");

    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("finalTime").innerHTML = elapsedTime;

      if(moves >= 6 && moves <10){
        document.getElementById('starRating').innerHTML= "Rating: &#9733 &#9733 &#9733";}
      else if(moves >= 10 && moves <14){
        document.getElementById('starRating').innerHTML= "Rating: &#9733 &#9733 &#9734";}
      else if(moves > 14){
        document.getElementById('starRating').innerHTML= "Rating: &#9733 &#9734 &#9734";}
}