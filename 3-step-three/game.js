var numberCards = 0;
var elapsedTime = 0;
var moves =  0;

let images = [
  {'name': 'anglerfisch', 'img': '../img/anglerfisch.jpg',},
  {'name': 'baumriese', 'img': '../img/baumriese.jpg',},
  {'name': 'crewmithund', 'img': '../img/crewmithund.jpg',},
  {'name': 'drachenfisch', 'img': '../img/drachenfisch.jpg',},
  {'name': 'eulen', 'img': '../img/eulen.jpg',},
  {'name': 'falke','img': '../img/falke.jpg',},
  {'name': 'fangzahnfisch', 'img': '../img/fangzahnfisch.jpg'},
  {'name': 'fluss', 'img': '../img/fluss.jpg'},
  {'name': 'forschermitpinguinen', 'img': '../img/forschermitpinguinen.jpg'},
  {'name': 'haengematte', 'img': '../img/haengematte.jpg'},
  {'name': 'kapitaen', 'img': '../img/kapitaen.jpg',},
  {'name': 'mast', 'img': '../img/mast.jpg'},
  {'name': 'pflanze','img': '../img/pflanze.jpg',},
  {'name': 'pinguine', 'img': '../img/pinguine.jpg'},
  {'name': 'tintenfisch', 'img': '../img/tintenfisch.jpg',},
  {'name': 'vogel', 'img': '../img/vogel.jpg'},
];

function startGame(nrCards){
    numberCards = nrCards;
    setupGameGrid(nrCards);
    let gameCards = pickCards(nrCards);
    dealCards(gameCards);
    showHideElements();
  }

  function setupGameGrid(nrCards){
    let grid = document.getElementById('grid');

    if(nrCards == 6){
    grid.setAttribute('class', 'grid6');
    }
  }

  function pickCards(nrCards){
    let cardSelection=_.sampleSize(images, nrCards);
    return _.shuffle(cardSelection.concat(cardSelection));
   }

  function dealCards(gameCards){
   let grid = document.getElementById('grid');
   gameCards.forEach(function(item){
     var name = item.name;
     var img = item.img;
     var card = document.createElement('div');
     card.classList.add('card');
     card.dataset.name = name;

     let front = document.createElement('div');
     front.classList.add('front');
     let back = document.createElement('div');
     back.classList.add('back');

     let imgEl = document.createElement('img');
     imgEl.setAttribute('src', img);
     imgEl.setAttribute('width', "120");
     imgEl.setAttribute('height', "120");    

     back.appendChild(imgEl);
     grid.appendChild(card);
     card.appendChild(front);
     card.appendChild(back);

   });
    grid.addEventListener('click', handleClick);
  }

  function showHideElements() {
    document.getElementById('movesDisplay').innerHTML= "Züge: "+ moves;
    document.getElementById('timerDisplay').innerHTML= "Benötigte Zeit: 0 Minute(n) und 0 Sekunden";

    document.getElementById('buttonNrCards6').disabled = true;
    document.getElementById('buttonNrCards6').style.display = 'none';
  }
