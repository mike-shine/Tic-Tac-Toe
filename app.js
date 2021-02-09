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

  const topCenter = document.querySelector('.rowOne .spaceTwo');

  const topRight = document.querySelector('.rowOne .spaceThree');

  const middleLeft = document.querySelector('.rowTwo .spaceOne');

  const center = document.querySelector('.rowTwo .spaceTwo');

  const middleRight = document.querySelector('.rowTwo .spaceThree');

  const bottomLeft = document.querySelector('.rowThree .spaceOne');

  const bottomCenter = document.querySelector('.rowThree .spaceTwo');

  const bottomRight = document.querySelector('.rowThree .spaceThree');

  return {topLeft, topCenter, topRight, middleLeft, center, middleRight, bottomLeft, bottomCenter, bottomRight};
})();

let allPlayers = [];

const Player = function(name) {
  const playerName = name;
  const movesPlayed = [];
  let amIPlayer1;
  let mark;

  if (player1) {
    amIPlayer1 = true;
    player1 = false;
  } else {
    amIPlayer1 = false;
  }

  if (amIPlayer1) {
    mark = prompt(`${name}, are you Xs or Os? Please enter either a capital X or capital O.`);
    if (mark === 'X') {
      xHasBeenTaken = true;
    }
  } else {
    if (xHasBeenTaken) {
      mark = 'O';
    } else {
      mark = 'X';
    }
  }
  return {playerName, movesPlayed, amIPlayer1, mark};
};



let player1 = true;
let xHasBeenTaken = false;

const mike = Player('Mike');
allPlayers.push(mike);
const mandy = Player('Mandy');
allPlayers.push(mandy);

let currentPlayer = allPlayers[0];


let currentTurn = 0;

const addMarksToBoard = (function() {
  let gameBoardTable = document.querySelector('.gameBoardTable');
  gameBoardTable.addEventListener('click', () => {
     if (allPlayers.indexOf(currentPlayer) === 0) {
       currentPlayer = allPlayers[1];
     } else {
       currentPlayer = allPlayers[0];
     }
  });

  [...Object.keys(displayController)].forEach(space => {
    displayController[space].addEventListener('click', () => {
      displayController[space].textContent = currentPlayer.mark;
    })
  });
})();





console.log(mandy);
console.log(allPlayers);

