console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


// if (cardOne === cardTwo) {
// 	alert('You found a match!')
// } else if (cardThree === cardFour){
// 	alert('You found a match!')
// } else if (cardTwo === cardThree){
// 	alert('Sorry no match')
// } else {
// 	alert('Sorry no match')
// };

var createCards = function(){  
document.getElementById('gameBoard')
for (var i = 0; i < 4; i++){
var card = document.createElement('div')
card.textContent = 'i am a card'
card.className = 'card';
gameBoard.appendChild(card)
}
};

createCards();





//  var createCards =  function(){
// for (var i = 0; i < 4; i ++) {

//  	document.createElement('div');
//  	// createCards.textContent= " ";
//  	document.getElementById('gameBoard')[0].appendChild(createCards);
//  }
//  };
 
// // error: cannot read appendChild of undefined?????? wtf?


// createCards();
