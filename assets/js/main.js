document.addEventListener('DOMContentLoaded', () => {
    createGameList();
  });
  
  const game = [
    {
      id: 0,
      name: 'goldfish',
      label: '',
      description: 'Welcome Bonus',
      price: 250,
      bonus: ['+ 20 Free Spins'],
      userRaiting: 1816,
      rating: 9.3,
      stars: 4.5
    },
    {
      id: 1,
      name: 'royale',
      label: 'trending',
      description: '200% Up to',
      price: 500,
      bonus: ['+ 20 FREE SPINS'],
      userRaiting: 2063,
      rating: 9.9,
      stars: 4.5
    },
    {
      id: 2,
      name: 'flash',
      label: 'exclusive',
      description: '100% Up to',
      price: 200,
      bonus: ['+ 25 Free Spins on Book of Dead'],
      userRaiting: 1890,
      rating: 9.4,
      stars: 4.5
    },
    {
      id: 3,
      name: 'casino',
      label: 'player favourite',
      description: '100% Up to',
      price: 1500,
      bonus: ['+ 150 Zee Spins', '+ 500 Zee Points'],
      userRaiting: 2589,
      rating: 10.0,
      stars: 4.5
    },
    {
      id: 4,
      name: 'frank',
      label: 'number 1 in europe',
      description: '200% Up to',
      price: 3000,
      bonus: ['+ 30 FREE SPINS'],
      userRaiting: 1975,
      rating: 9.8,
      stars: 4.5
    }
  ]
  
  const gameContainer = document.querySelector('.game__container');
  
  function createGameList() {
    game.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
    game.forEach((el) => {
      addElement(el);
      addElementLabel(el);
      addImage(el);
      addDescription(el);
      addStars(el, el.stars);
      addGameRating(el);
      addBtn(el);
      addResponsible();
    });
  }
  
  function addElement({ id }) {
    gameElement = document.createElement('div');
    gameElement.className = 'game';
    gameElement.id = id;
    gameContainer.appendChild(gameElement);
  };

  function addImage({ name }) {
    imageElement = document.createElement('div');
    imageElement.className = 'element__image-container';
    imageElement.innerHTML = `<div class="element__image" style="background-image: url(&quot;assets/img/${name}.jpg&quot;);"></div>`;
    gameElement.appendChild(imageElement);
  };
  
  function addElementLabel({ label }) {
    elementLabel = document.createElement('span');
    elementLabel.className = 'element__label';
    elementLabel.innerHTML = `${label}`; 
    gameElement.appendChild(elementLabel);
    if(label === '') {
      gameElement.removeChild(gameElement.firstChild);
    }
  };
  
  function addDescription({ name, description, price, bonus}) {
    bonus = bonus.join('<br/> ')
    infoElement = document.createElement('div');
    infoElement.className = 'element__description-container';
    infoElement.innerHTML = `<span class="element__name">${name}</span><span class="element__description">${description}</span><span class="element__price">&euro;${price}</span><span class="element__bonus">${bonus}</span>`;
    gameElement.appendChild(infoElement);
  };
  
  function addStars({ userRaiting }, countStars) {
    raitingElement = document.createElement('div');
    raitingElement.className = 'element__rating-stars';
    raitingElement.innerHTML = `<span>Rating(${userRaiting})</span>`;
    container = document.createElement('div');
    container.className = 'element__stars';
    star = '<img src="assets/img/star.png" alt="star">';
    halfStar = '<img src="assets/img/star-half.png" alt="star-half">';
    starNum = countStars;
  
    for (let i = 1; i <= starNum; i++){
      container.insertAdjacentHTML('beforeend', star);
      container.lastElementChild.classList.add('element__star');
      raitingElement.appendChild(container);
    }
  
    if(starNum % 1 !== 0) {
      container.insertAdjacentHTML('beforeend', halfStar);
      container.lastElementChild.classList.add('element__star');
    }
    if(starNum < 5) {
      for (let i = 1; i <= 5 - starNum; i++){
        container.insertAdjacentHTML('beforeend', noStar);
        container.lastElementChild.classList.add('element__star');
      }
    }
    return raitingElement;
  };

  function addResponsible() {
    columnInfo = document.createElement('div');
    columnInfo.className = 'element__column-info';
    columnInfo.appendChild(raitingElement);
    columnInfo.appendChild(rateElement);
    columnInfo.appendChild(btnElement);
    gameElement.appendChild(columnInfo);
  }
  
  function addGameRating({ rating }) {
    rateElement = document.createElement('div');
    rateElement.className = 'element__rating';
    rateElement.innerHTML = `<h1>${rating}</h1>`;
    return rateElement;
  };
  
  function addBtn({ id }) {
    btnElement = document.createElement('div');
    btnElement.className = 'element__btn-container';
    btnElement.innerHTML = `<button class="element__btn" id="${id}">Play</button>`;
    return btnElement; 
  };
  
  $( document ).ready(function() {
    $('.element__btn').click(function(e) {
      e.preventDefault();
      let data = {
        time: new Date(),
        btnID: parseInt(this.id),
      }
      console.log(data);
      data= JSON.stringify(data)
      window.location.href = `http://test1.ru/index.php?data=${data}`
    })
  });
  