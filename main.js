function openNav() {
	document.getElementById('mySidenav').style.width = "275px";
	document.getElementById('sideTipBar').style.marginRight = "275px";
	var qrCode = document.createElement('img');
	qrCode.setAttribute('src', 'BTC QR.png');
	qrCode.setAttribute('id', 'qrImg');
	document.getElementById('qrCodeHold').appendChild(qrCode);
	document.body.style.backgroundColor = "rgba(0,0,0,.4)";
}

function closeNav() {
	document.getElementById('mySidenav').style.width = "0";
	document.getElementById('sideTipBar').style.marginRight = "20px";
	document.getElementById('qrImg').remove();
	document.body.style.backgroundColor = "#FFF6F2";
}

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
	];
var cardsInPlay = [];

var score = 0;
var newScore = function () {
	score += 10;
}

var resetScore = function () {
	score = 0;
	document.getElementById('score').textContent = score;

}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetScore);


//creates array and function with random numbers for createBoard to pick from
//var randNumArray = [];
var genNum = function () {
	for (var i = 0; i < cards.length; i++) {
	var randNum = Math.floor(Math.random() * 4);
  		if (randNumArray[0] !== randNum && randNumArray[1] !== randNum && randNumArray[2] !== randNum && randNumArray[3] !== randNum) {
      		randNumArray.push(randNum);
  		} else {
    		i--;
  		}
	}
}

//checks for 2 cards picked, then checks for matching cards
//match alerts win, adds 10 to score, and resets board with new card config
//false alerts try again and resets board
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		newScore();
		document.getElementById('score').textContent = score;
		alert("You found a match!");
		//var cardsOnBoard = document.getElementById('game-board').childElementCount;
		for (var i = 3; i >= 0; i--) {
			document.getElementById('card' + i).remove();
		}
		cardsInPlay = [];
		createBoard();
	} else {
		alert("Sorry, try again.");
		//var cardsOnBoard = document.getElementById('game-board').childElementCount;
		for (var i = 3; i >= 0; i--) {
			document.getElementById('card' + i).remove();
		}
		cardsInPlay = [];
		createBoard();
	}
}

//registers user click, pushes to cardsInPlay, flips card, removes eventListener
//if 2 cards, checks for match
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	this.removeEventListener('click', flipCard);
	if (cardsInPlay.length === 2) {
		setTimeout(checkForMatch, 250);
	}
}

//creates card back src imgs, data-id, id, evenClick, under div
var createBoard = function () {
	randNumArray = [];
	genNum();
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.className = "cursor";
		cardElement.setAttribute('data-id', randNumArray[i]);
		cardElement.setAttribute('id', 'card' + i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement)[i];
	}
}

createBoard();