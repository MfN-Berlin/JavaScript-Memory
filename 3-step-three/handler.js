var selectedCards = [];
var startTime = undefined;
var intervalId = undefined;
var pairs = 0;

function handleClick(event){
    if(startTime === undefined){
        startTime = new Date().getTime();
       intervalId = setInterval(calculateTime , 1000);
    }

    var selectedElement = event.target;

    if(selectedElement.id === 'grid' ||
     selectedElement.parentNode.classList.contains('selected')){
       return;
    }

    if(selectedCards.length < 2){
        selectedCards.push(event.target);
        selectedElement.parentNode.classList.add('selected');
    }

    if(selectedCards.length ==2){
        if(selectedCards[0].parentNode.dataset.name === selectedCards[1].parentNode.dataset.name){
          setTimeout(match, 1000);
          incrementPairs();
          return;
        }
        setTimeout(resetGuesses, 1500);
    }
  }

  function match(){
    selectedCards = [];
    const selected = document.querySelectorAll('.selected');
    selected.forEach(function(card){
      card.classList.add('disabled');
      card.classList.add('match');
      card.classList.remove('selected');
    });
    incrementCounter();
  };

  function resetGuesses(){
    selectedCards = [];
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card =>card.classList.remove('selected'));
    incrementCounter();
  }

  function incrementPairs(){
    pairs++;
    if(pairs === numberCards){
        clearInterval(intervalId)
    }
  }

  function incrementCounter(){
    moves++;
    document.getElementById('movesDisplay').innerHTML= "Züge: " + moves;
  }

function calculateTime(){
      var time = new Date().getTime() - startTime;
      elapsed = Math.floor((time / 100) / 10 );
      var min = 0, sec = 0;
      if(elapsed > 59){
        min = parseInt(elapsed/60);
        sec = elapsed % 60;
      }else{
        sec = elapsed;
      }
      document.getElementById('timerDisplay').innerHTML= "Benötigte Zeit: "+min+" Minute(n) und " + sec + " Sekunden";
}
