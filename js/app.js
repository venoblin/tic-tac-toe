////////////////////////////////
// Global Variables Here
////////////////////////////////
const gameContainer = document.getElementById('game-container')

const cellsArr = []

let firstPlayerName = 'Player 1'
let secondPlayerName = 'Player 2'
let currentPlayer = 'x'

const icons = {
  x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>',
  o: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"/></svg>'
}

let possibleComputerMoves = []

let isComputerPlaying = false
let isGameOver = false

const wins = {
  x: 0,
  o: 0
}

////////////////////////////////
// Helper Functions
////////////////////////////////
const removeAllChildren = (parentElem, exeptionsArr = []) => {
  // Exeptions array should be an array of classes from the elements
  // you wish not to remove, just add the string don't put a '.',
  // leave empty if you wish to remove everything
  const elemsToRemove = []

  for (let child of parentElem.children) {
    if (exeptionsArr.length) {
      for (let exeption of exeptionsArr) {
        if (!child.classList.contains(exeption)) elemsToRemove.push(child)
      }
    } else {
      elemsToRemove.push(child)
    }
  }

  for (let elem of elemsToRemove) {
    elem.remove()
  }
}

const returnRandomNum = (max) => {
  return Math.floor(Math.random() * max)
}

// Computer makes a choice from the
// possibleComputerMovesArr, this function
// clears it and adds all the options again
const resetComputerMovesArr = () => {
  possibleComputerMoves = []
  for (let i = 0; i < 9; i++) {
    possibleComputerMoves.push(i)
  }
}

const checkCurrentPlayerName = () => {
  return currentPlayer === 'x' ? firstPlayerName : secondPlayerName
}

const changePlayingHeader = (name) => {
  const playingHeader = document.querySelector('.currently-playing')

  if (playingHeader !== null) {
    if (name.length) {
      playingHeader.innerText = `${name}'s Turn`
    } else {
      playingHeader.innerText = ''
    }
  }
}

const updateWins = () => {
  wins[currentPlayer].wins++
}

////////////////////////////////
// Functions For Game Logic Here
////////////////////////////////
const isCellFilled = (cellNum) => {
  // Returns true or false if a certain cell already has a piece on it
  let filled = null

  typeof cellsArr[cellNum] !== 'undefined' ? (filled = true) : (filled = false)

  return filled
}

const isBoardFilled = () => {
  let filled = null
  let amountOfCellsFilled = 0

  for (let i = 0; i < cellsArr.length; i++) {
    if (isCellFilled(i)) amountOfCellsFilled++
  }

  amountOfCellsFilled >= 9 ? (filled = true) : (filled = false)

  return filled
}

const updateCurrentPlayer = () => {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
    changePlayingHeader(secondPlayerName)
    if (isComputerPlaying) {
      computerChoice()
    }
  } else {
    currentPlayer = 'x'
    changePlayingHeader(firstPlayerName)
  }
}

const isWinner = () => {
  const cells = document.querySelectorAll('.cell')

  if (
    cellsArr[0] === currentPlayer &&
    cellsArr[1] === currentPlayer &&
    cellsArr[2] === currentPlayer
  ) {
    cells[0].classList.add('winning-cell')
    cells[1].classList.add('winning-cell')
    cells[2].classList.add('winning-cell')
    return true
  } else if (
    cellsArr[3] === currentPlayer &&
    cellsArr[4] === currentPlayer &&
    cellsArr[5] === currentPlayer
  ) {
    cells[3].classList.add('winning-cell')
    cells[4].classList.add('winning-cell')
    cells[5].classList.add('winning-cell')
    return true
  } else if (
    cellsArr[6] === currentPlayer &&
    cellsArr[7] === currentPlayer &&
    cellsArr[8] === currentPlayer
  ) {
    cells[6].classList.add('winning-cell')
    cells[7].classList.add('winning-cell')
    cells[8].classList.add('winning-cell')
    return true
  } else if (
    cellsArr[0] === currentPlayer &&
    cellsArr[3] === currentPlayer &&
    cellsArr[6] === currentPlayer
  ) {
    cells[0].classList.add('winning-cell')
    cells[3].classList.add('winning-cell')
    cells[6].classList.add('winning-cell')
    return true
  } else if (
    cellsArr[1] === currentPlayer &&
    cellsArr[4] === currentPlayer &&
    cellsArr[7] === currentPlayer
  ) {
    cells[1].classList.add('winning-cell')
    cells[4].classList.add('winning-cell')
    cells[7].classList.add('winning-cell')
    return true
  } else if (
    cellsArr[2] === currentPlayer &&
    cellsArr[5] === currentPlayer &&
    cellsArr[8] === currentPlayer
  ) {
    cells[2].classList.add('winning-cell')
    cells[5].classList.add('winning-cell')
    cells[8].classList.add('winning-cell')
    return true
  } else if (
    cellsArr[0] === currentPlayer &&
    cellsArr[4] === currentPlayer &&
    cellsArr[8] === currentPlayer
  ) {
    cells[0].classList.add('winning-cell')
    cells[4].classList.add('winning-cell')
    cells[8].classList.add('winning-cell')
    return true
  } else if (
    cellsArr[2] === currentPlayer &&
    cellsArr[4] === currentPlayer &&
    cellsArr[6] === currentPlayer
  ) {
    cells[2].classList.add('winning-cell')
    cells[4].classList.add('winning-cell')
    cells[6].classList.add('winning-cell')
    return true
  } else {
    return false
  }
}

const ifGameOver = () => {
  if (isWinner()) {
    isGameOver = true
    wins[currentPlayer]++
    generateGameOverScreen(`${checkCurrentPlayerName()} is the winner!`)
  } else if (isBoardFilled()) {
    isGameOver = true
    generateGameOverScreen(`It's a draw!`)
  }
}

////////////////////////////////
// Computer
////////////////////////////////
const computerChoice = () => {
  const cells = document.querySelectorAll('.cell')

  const movePicker = returnRandomNum(possibleComputerMoves.length)
  const pick = possibleComputerMoves[movePicker]
  possibleComputerMoves = possibleComputerMoves.filter((num) => num !== pick)

  const board = document.querySelector('.board')
  const clickBlocker = document.createElement('div')
  clickBlocker.classList.add('click-blocker')
  board.append(clickBlocker)

  if (!isGameOver) {
    setTimeout(() => {
      if (!isCellFilled(pick)) {
        cellsArr[pick] = 'o'
        cells[pick].innerHTML = icons.o

        ifGameOver()

        updateCurrentPlayer()
      } else {
        computerChoice()
      }

      clickBlocker.remove()
    }, 600)
  }
}

////////////////////////////////
// Event Listeners Here
////////////////////////////////
const cellClick = (cell, cellNum) => {
  if (!isCellFilled(cellNum)) {
    cellsArr[cellNum] = currentPlayer

    cell.innerHTML = icons[currentPlayer]

    possibleComputerMoves = possibleComputerMoves.filter(
      (num) => num !== cellNum
    )

    ifGameOver()

    updateCurrentPlayer()
  }
}

const resetBoard = () => {
  const cells = document.querySelectorAll('.cell')

  for (let cell of cells) {
    cell.innerText = ''
    cell.classList.remove('winning-cell')
  }

  cellsArr.length = 0
  currentPlayer = 'x'

  resetComputerMovesArr()
  changePlayingHeader(firstPlayerName)
}

const resetWins = () => {
  const firstPlayerWins = document.querySelector('.first-wins')
  const secondPlayerWins = document.querySelector('.second-wins')

  wins.x = 0
  wins.o = 0

  if (firstPlayerWins !== null && secondPlayerWins !== null) {
    firstPlayerWins.innerHTML = `${firstPlayerName} Wins: <span>${wins.x}</span>`
    secondPlayerWins.innerHTML = `${secondPlayerName} Wins: <span>${wins.o}</span>`
  }
}

const resetGameContainer = () => {
  resetBoard()

  removeAllChildren(gameContainer)
}

const startHandler = (firstName, secondName) => {
  if (firstName === '' || secondName === '') {
    showAlert('Both names are required.')
  } else if (firstName === secondName) {
    if (secondName === 'Computer') {
      showAlert(`You can't share names with the Computer.`)
    } else {
      showAlert(`Names can't be the same.`)
    }
  } else {
    firstPlayerName = firstName
    secondPlayerName = secondName
    generateGameBoard()
  }
}

////////////////////////////////
// Website Builder Functions
////////////////////////////////
const showAlert = (msg) => {
  const alertContainer = document.createElement('div')
  alertContainer.classList.add('alert')

  const h2 = document.createElement('h2')
  h2.innerText = msg

  const dismissBtn = document.createElement('button')
  dismissBtn.innerText = 'Ok'
  dismissBtn.classList.add('btn')
  dismissBtn.addEventListener('click', () => {
    alertContainer.remove()
  })

  alertContainer.append(h2)
  alertContainer.append(dismissBtn)

  gameContainer.append(alertContainer)
}

const generateGameOverScreen = (msg) => {
  const gameBoard = document.querySelector('.game-board')
  removeAllChildren(gameBoard, ['board'])

  const gameOverContainer = document.createElement('div')
  gameOverContainer.classList.add('alert')

  const h2 = document.createElement('h2')
  h2.innerText = msg

  const dismissBtn = document.createElement('button')
  dismissBtn.innerText = 'Ok'
  dismissBtn.classList.add('btn')
  dismissBtn.addEventListener('click', () => {
    isGameOver = false
    generateGameBoard()
  })

  const mainMenuBtn = document.createElement('button')
  mainMenuBtn.innerText = 'Main Menu'
  mainMenuBtn.classList.add('btn')
  mainMenuBtn.addEventListener('click', () => {
    isGameOver = false
    generateStartScreen()
  })

  gameOverContainer.append(h2)
  gameOverContainer.append(dismissBtn)
  gameOverContainer.append(mainMenuBtn)

  gameContainer.append(gameOverContainer)
}

const generateStartScreen = () => {
  resetGameContainer()
  resetWins()

  firstPlayerName = 'Player 1'
  secondPlayerName = 'Player 2'

  isComputerPlaying = false

  const mainMenu = document.createElement('div')
  mainMenu.classList.add('main-menu')

  const gameModeContainer = document.createElement('div')
  gameModeContainer.classList.add('game-mode-container')

  const pvpModeBtn = document.createElement('button')
  pvpModeBtn.classList.add('selected')
  pvpModeBtn.innerText = '🤨 vs. 🤨'
  pvpModeBtn.addEventListener('click', () => {
    isComputerPlaying = false

    secondPlayerInput.style.display = 'initial'

    pvpModeBtn.classList.add('selected')
    pvcModeBtn.classList.remove('selected')
  })
  const pvcModeBtn = document.createElement('button')
  pvcModeBtn.innerText = '🤨 vs. 🤖'
  pvcModeBtn.addEventListener('click', () => {
    isComputerPlaying = true

    secondPlayerInput.style.display = 'none'

    pvcModeBtn.classList.add('selected')
    pvpModeBtn.classList.remove('selected')
  })

  const inputContainer = document.createElement('div')
  inputContainer.classList.add('input-container')

  const firstPlayerInput = document.createElement('input')
  firstPlayerInput.setAttribute('id', 'firstPlayerInput')
  firstPlayerInput.setAttribute('placeholder', 'Player 1 Name')
  firstPlayerInput.value = firstPlayerName
  const secondPlayerInput = document.createElement('input')
  secondPlayerInput.setAttribute('id', 'secondPlayerInput')
  secondPlayerInput.setAttribute('placeholder', 'Player 2 Name')
  secondPlayerInput.value = secondPlayerName

  gameModeContainer.append(pvpModeBtn)
  gameModeContainer.append(pvcModeBtn)
  inputContainer.append(firstPlayerInput)
  inputContainer.append(secondPlayerInput)

  const startBtn = document.createElement('button')
  startBtn.classList.add('btn')
  startBtn.innerText = 'Play'
  startBtn.addEventListener('click', () => {
    if (isComputerPlaying) {
      startHandler(firstPlayerInput.value, 'Computer')
    } else {
      startHandler(firstPlayerInput.value, secondPlayerInput.value)
    }
  })

  mainMenu.append(gameModeContainer)
  mainMenu.append(inputContainer)
  mainMenu.append(startBtn)

  gameContainer.append(mainMenu)
}

const generateGameBoard = () => {
  resetGameContainer()

  const gameBoard = document.createElement('div')
  gameBoard.classList.add('game-board')

  const winsContainer = document.createElement('div')
  winsContainer.classList.add('wins-container')

  const firstPlayerWins = document.createElement('h3')
  firstPlayerWins.classList.add('first-wins')
  firstPlayerWins.innerHTML = `${firstPlayerName} Wins: <span>${wins.x}</span>`

  const secondPlayerWins = document.createElement('h3')
  secondPlayerWins.classList.add('second-wins')
  secondPlayerWins.innerHTML = `${secondPlayerName} Wins: <span>${wins.o}</span>`

  const playingHeader = document.createElement('h2')
  playingHeader.classList.add('currently-playing')
  playingHeader.innerText = `${firstPlayerName}'s Turn`

  const board = document.createElement('div')
  board.classList.add('board')

  const btnsContainer = document.createElement('div')
  btnsContainer.classList.add('btns-container')

  const resetBtn = document.createElement('button')
  resetBtn.innerText = 'Reset'
  resetBtn.classList.add('btn')
  resetBtn.addEventListener('click', () => {
    resetWins()
    resetBoard()
  })

  const mainMenuBtn = document.createElement('button')
  mainMenuBtn.innerText = 'Main Menu'
  mainMenuBtn.classList.add('btn')
  mainMenuBtn.addEventListener('click', generateStartScreen)

  for (let i = 0; i < 9; i++) {
    const newCell = document.createElement('div')
    newCell.classList.add('cell')

    newCell.addEventListener('click', () => {
      cellClick(newCell, i)
    })

    board.append(newCell)
  }

  winsContainer.append(firstPlayerWins)
  winsContainer.append(secondPlayerWins)
  btnsContainer.append(resetBtn)
  btnsContainer.append(mainMenuBtn)

  gameBoard.append(winsContainer)
  gameBoard.append(playingHeader)
  gameBoard.append(board)
  gameBoard.append(btnsContainer)

  gameContainer.append(gameBoard)
}

generateStartScreen()
