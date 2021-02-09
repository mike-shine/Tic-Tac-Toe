const body = document.querySelector('body');

const gameBoard = (function() {
  let X = 'X';
  let O = 'O';
  let gameArray = [
    [X, O, X],
    [O, X, O],
    [X, O, X]
  ];
  return {X, O, gameArray};
})();

const displayController = (function() {
  const topLeft = document.querySelector('.rowOne .spaceOne');
  topLeft.textContent = gameBoard.gameArray[0][0];

  const topCenter = document.querySelector('.rowOne .spaceTwo');
  topCenter.textContent = gameBoard.gameArray[0][1];

  const topRight = document.querySelector('.rowOne .spaceThree');
  topRight.textContent = gameBoard.gameArray[0][2];

  const middleLeft = document.querySelector('.rowTwo .spaceOne');
  middleLeft.textContent = gameBoard.gameArray[1][0];

  const center = document.querySelector('.rowTwo .spaceTwo');
  center.textContent = gameBoard.gameArray[1][1];

  const middleRight = document.querySelector('.rowTwo .spaceThree');
  middleRight.textContent = gameBoard.gameArray[1][2];

  const bottomLeft = document.querySelector('.rowThree .spaceOne');
  bottomLeft.textContent = gameBoard.gameArray[2][0];

  const bottomCenter = document.querySelector('.rowThree .spaceTwo');
  bottomCenter.textContent = gameBoard.gameArray[2][1];

  const bottomRight = document.querySelector('.rowThree .spaceThree');
  bottomRight.textContent = gameBoard.gameArray[2][2];

  return {topLeft, topCenter, topRight, middleLeft, center, middleRight, bottomLeft, bottomCenter, bottomRight};
})();

const Player = function(name) {
  const movesPlayed = [];
  let amIPlayer1;

  if (player1) {
    amIPlayer1 = true;
    player1 = false;
  } else {
    amIPlayer1 = false;
  }

  if (amIPlayer1) {
    const mark = prompt(`${name}, are you Xs or Os? Please enter either a capital X or capital O.`);
    if (mark === 'X') {
      xHasBeenTaken = true;
    }
  } else {
    if (xHasBeenTaken) {
      const mark = 'O';
    } else {
      const mark = 'X';
    }
  }
};

const addMarksToBoard = (function() {

})();

let player1 = true;
let xHasBeenTaken = false;
let currentPlayer;
let currentTurn = 0;

const mike = Player('Mike');
const mandy = Player('Mandy');

