const body = document.querySelector('body');
const modal = document.getElementById('modalOuterDiv');
const closeModal = document.getElementById('spanClose');

// when DOM loads...
// trigger modal opening (text should indicate player 1)
// accept input and save to a variable upon submission
// change text to player 2
// accept input and save to another variable upon submission (may need to be a function????)

let player1Name, player2Name;

function getNameFromModal(player) {
  document.getElementById('submitButton').onclick = () => {
    if (!player1Name) {
      player1Name = document.getElementById('playerNameModal').value;
      modal.style.display = 'none';
      console.log(document.getElementById('playerNameModal').value);
      console.log('^^^ that is player1Name');

    } else {
      player2Name = document.getElementById('playerNameModal').value;
      modal.style.display = 'none';
      console.log(document.getElementById('playerNameModal').value);
      console.log('^^^ that is player2Name');
    }

  }

}

function assignPlayerNames() {
  if (player1Name) {
    modal.style.display = 'block';
   document.getElementById('nameField').textContent = 'Player 2, enter your name below:'
   getNameFromModal(player2Name);
  } else {
    document.getElementById('nameField').textContent = 'Player 1, enter your name below:'
    modal.style.display = 'block';
    getNameFromModal(player1Name);
    // document.getElementById('playerNameModal').value = '';
    if (!player2Name) {
      setTimeout(() => {
        assignPlayerNames();
      }, 250)
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('upon DOM load, player1Name is: ', player1Name);
  assignPlayerNames();
  setTimeout(() => {
    assignPlayerNames();
  }, 500);

  // modal.style.display = 'none';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', () => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
  Object.keys(displayController).forEach((space, index) => {
    displayController[space].textContent = '';
    gameBoard.gameArray[index] = '';
  });
  allPlayers.forEach(player => {
    player.currentMarks = [];
  })
  currentPlayer = allPlayers[0];
  turnsElapsed = 0;
});

// let player1Name = prompt('Player 1, please enter your name!');
// let player2Name = prompt('Player 2, please enter your name!');

let allPlayers = [];
let player1Check = true;
let xHasBeenTaken = false;

const Player = function(name) {
  const playerName = name;
  const movesPlayed = [];
  let amIPlayer1;
  let mark;
  let currentMarks = [];

  if (player1Check) {
    amIPlayer1 = true;
    player1Check = false;
  } else {
    amIPlayer1 = false;
  }

  if (amIPlayer1) {
    /*mark = prompt(`${name}, are you Xs or Os? Please enter either a capital X or capital O.`);*/
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
  return {playerName, movesPlayed, amIPlayer1, mark, currentMarks};
};

let player1 = Player(player1Name);
allPlayers.push(player1);
let player2 = Player(player2Name);
allPlayers.push(player2);


const displayController = (function() {
  const topLeft = document.getElementById('1');
  const topCenter = document.getElementById('2');
  const topRight = document.getElementById('3');
  const middleLeft = document.getElementById('4');
  const center = document.getElementById('5');
  const middleRight = document.getElementById('6');
  const bottomLeft = document.getElementById('7');
  const bottomCenter = document.getElementById('8');
  const bottomRight = document.getElementById('9');

  return {topLeft, topCenter, topRight, middleLeft, center, middleRight, bottomLeft, bottomCenter, bottomRight};
})();


const gameBoard = (function() {
  let tLT = displayController.topLeft.textContent;
  let tCT = displayController.topCenter.textContent;
  let tRT = displayController.topRight.textContent;
  let mLT = displayController.middleLeft.textContent;
  let cT = displayController.center.textContent;
  let mRT = displayController.middleRight.textContent;
  let bLT = displayController.bottomLeft.textContent;
  let bCT = displayController.bottomCenter.textContent;
  let bRT = displayController.bottomRight.textContent;

  let gameArray = [
    tLT, tCT, tRT,
    mLT, cT, mRT,
    bLT, bCT, bRT
  ];
  return {gameArray};
})();













let currentPlayer = allPlayers[0];


const winningCombos = (function() {
  return [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]})();

const gameOver = (function() {

  const tieGame = () => {
    setTimeout(() => {
      alert('Tie game! Well done. Press the clear button to begin a new round.')
    }, 100);
  }

  const playerWins = function() {
    setTimeout(() => {
      Boolean(currentPlayer.playerName === allPlayers[0].playerName)
      ? alert(`Congratulations ${allPlayers[1].playerName} on your victory!`)
      : alert(`Congratulations ${allPlayers[0].playerName} on your victory!`);
    }, 100);
  };

  const threeInARow = function() {
    return winningCombos.some(combo => {
      return currentPlayer.currentMarks.includes(combo[0])
      && currentPlayer.currentMarks.includes(combo[1])
      && currentPlayer.currentMarks.includes(combo[2])
    });
  }

  let gameBoardTable = document.querySelector('.gameBoardTable');
  gameBoardTable.addEventListener('click', () => {
     if (threeInARow()) {
      playerWins();
     } else if (turnsElapsed === 9) {
      tieGame();
    }
  });
  return {threeInARow};
})();







let turnsElapsed = 0;

const addMarksToBoard = (function() {
  Object.keys(displayController).forEach((space, index) => {
    displayController[space].addEventListener('click', () => {
      if (displayController[space].textContent === '') {
        displayController[space].textContent = currentPlayer.mark;
        gameBoard.gameArray[index] = currentPlayer.mark;
        currentPlayer.currentMarks.push(index + 1);
        turnsElapsed++;
      }
    })
  });

  let gameBoardTable = document.querySelector('.gameBoardTable');
  gameBoardTable.addEventListener('click', () => {
     if (allPlayers.indexOf(currentPlayer) === 0) {
       currentPlayer = allPlayers[1];
     } else {
       currentPlayer = allPlayers[0];
     }
  });


})();




