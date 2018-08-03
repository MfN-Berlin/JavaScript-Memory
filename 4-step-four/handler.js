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

    if(selectedCards.length === 2){
        if(selectedCards[0].parentNode.dataset.name === selectedCards[1].parentNode.dataset.name){
            match();
            incrementPairs();
            handlePairs(selectedElement.parentNode.dataset.name)
            return;
        }
        setTimeout(resetGuesses, 1000);
    }
  }

  function match(){
    selectedCards = [];
    const selected = document.querySelectorAll('.selected');
    selected.forEach(function(card){
      card.classList.add('match');
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
        endGame();
    }
  }

  function incrementCounter(){
    moves++;
    document.getElementById('movesDisplay').innerHTML= "Züge: " + moves;
  }

  function calculateTime(){
        var time = new Date().getTime() - startTime;
        elapsedTime = Math.floor((time / 100) / 10 );
        var min = 0, sec = 0;
        if(elapsedTime > 59){
          min = parseInt(elapsedTime/60);
          sec = elapsedTime % 60;
        }else{
          sec = elapsedTime;
        }
        document.getElementById('timerDisplay').innerHTML= "Benötigte Zeit: "+min+" Minute(n) und " + sec + " Sekunden";
  }
