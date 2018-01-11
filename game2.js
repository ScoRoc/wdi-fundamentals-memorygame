var tile = document.getElementsByTagName('div');
var gameBoard = document.getElementById('gameBoard');
var randomBoardButton = document.getElementById('randomBoardButton');
var resetBoard = document.getElementById('resetBoard');

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

function genColor () {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

/*
 Possibly add start button to generate tiles(divs) with -4px margin
*/

for (var i = 0; i < gameBoard.childElementCount; i++) {
	tile[i].addEventListener('mouseover', function() {
		this.className = '';
		if (this.getAttribute('data-id') !== 'solid') {
			this.style.backgroundColor = genColor();}
		}
	);
	tile[i].addEventListener('mouseleave', function() {this.className = 'fade';}
	);
	tile[i].addEventListener('click', function() {
		if (this.getAttribute('data-id') === 'solid') {
			this.removeAttribute('data-id');
		} else {
			this.setAttribute('data-id', 'solid');
			}
		}
	);
}


var genRandomBoard = function() {
	for (var i = 0; i < gameBoard.childElementCount; i++) {
		tile[i].style.backgroundColor = genColor();
		tile[i].className = '';
	}
}

var resetBoardFunc = function() {
	for (var i = 0; i < gameBoard.childElementCount; i++) {
		tile[i].style.backgroundColor = 'transparent';
		tile[i].className = '';
	}
}

randomBoardButton.addEventListener('click', genRandomBoard);
resetBoard.addEventListener('click', resetBoardFunc);
