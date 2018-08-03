function handlePairs(element){
    let container = undefined;
    if(pairs === 1 || pairs % 3 == 1){
        container = document.createElement('div');
        container.className = 'container';
        document.getElementById("side").appendChild(container);
    }else{
        let list = document.getElementsByClassName('container');
        container = list[list.length-1];
    }
    let card = createFoundPairElement(element);
    let parent = getLastChild(container);
    parent.appendChild(card);
  }

 function createFoundPairElement(name){
    let imgPath = 'img/'+name+'.jpg';
    let card = document.createElement('div');
    card.className = 'sideCard';
    const cardImage = document.createElement('div');
    cardImage.classList.add('sideCardImage');
    cardImage.style.backgroundImage = `url(${imgPath})`;
    card.appendChild(cardImage);
    return card;
  }

  function getLastChild(container){
    while(container.hasChildNodes()){
        container = container.children[0]
    }
    return container;
  }