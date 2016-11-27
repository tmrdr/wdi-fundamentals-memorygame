
console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('gameBoard');
var createBoard = function() {
	for (i = 0; i< cards.length; i++){
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards)

	board.appendChild(cardElement);
	board.appendChild(cardElement);

	}
}

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src ='kingcard.png'/>";
	} else {
		this.innerHTML = "<img src ='queencard.png'/>"
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}


var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry no match');
	}
}

cardsInPlay = [];
createBoard();

































// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";


// var createCards = function(){  
// document.getElementById('gameBoard')
// for (var i = 0; i < 4; i++){
// var card = document.createElement('div')
// card.textContent = 'i am a card'
// card.className = 'card';
// gameBoard.appendChild(card)
// }
// };

// createCards();





// var createBoard = function(){
// 	for (i = 0; i< cards.length; i++){
// 		cardElement.setAttribute('data-card', cards[i]);
// 		cardElement.addEventListener('click', isTwoCards)
// 	}
// }

// var isMatch = function() {
// 	if (cardOne === cardTwo) {
// 	alert('You found a match!')
// } else if (cardThree === cardFour){
// 	alert('You found a match!')
// } else if (cardTwo === cardThree){
// 	alert('Sorry no match')
// } else {
// 	alert('Sorry no match')
// }

// var isTwoCards = function(){
// 	cardsInPlay.push(this.getAttribute('data-card'));
// 	if (cardsInPlay.length === 2) {
// 		isMatch(cardsInPlay);
// 		cardsInPlay = [];
// 	} else {}


// 	};






//  var createCards =  function(){
// for (var i = 0; i < 4; i ++) {

//  	document.createElement('div');
//  	// createCards.textContent= " ";
//  	document.getElementById('gameBoard')[0].appendChild(createCards);
//  }
//  };
 
// // error: cannot read appendChild of undefined?????? wtf?


// createCards();
