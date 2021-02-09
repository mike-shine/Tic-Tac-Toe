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
  let topLeft = document.querySelector('.rowOne .spaceOne').textContent = gameBoard.gameArray[0][0];

  let topCenter = document.querySelector('.rowOne .spaceTwo').textContent = gameBoard.gameArray[0][1];

  let topRight = document.querySelector('.rowOne .spaceThree').textContent = gameBoard.gameArray[0][2];

  let middleLeft = document.querySelector('.rowTwo .spaceOne').textContent = gameBoard.gameArray[1][0];

  let center = document.querySelector('.rowTwo .spaceTwo').textContent = gameBoard.gameArray[1][1];

  let middleRight = document.querySelector('.rowTwo .spaceThree').textContent = gameBoard.gameArray[1][2];

  let bottomLeft = document.querySelector('.rowThree .spaceOne').textContent = gameBoard.gameArray[2][0];

  let bottomCenter = document.querySelector('.rowThree .spaceTwo').textContent = gameBoard.gameArray[2][1];

  let bottomRight = document.querySelector('.rowThree .spaceThree').textContent = gameBoard.gameArray[2][2];
})();