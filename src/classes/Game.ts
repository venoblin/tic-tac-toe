import Player from "./Player.js"
import Computer from "./Computer.js"
import DOMElement from "./DOMElement.js"
import Array2D from "./Array2D.js"
import { BoardInfo } from "../types"

export default class Game {
  #layout: HTMLElement
  #playerOne: Player
  #playerTwo: Player
  #computer: Computer
  #currentPlayer: Player | Computer
  #currentPlayerHeader?: HTMLElement
  #board: Array2D<BoardInfo>

  constructor(anchorId: string, playerOne: Player, playerTwo: Player) {
    this.#playerOne = playerOne
    this.#playerTwo = playerTwo
    this.#computer = new Computer(this.#playerTwo.icon)
    this.#currentPlayer = this.#playerOne
    this.#board = new Array2D<BoardInfo>({cell: null, player: null}, 3, 3)

    // creating and anchoring layout element to anchor element  
    const anchorElem = document.getElementById(anchorId)
    if (anchorElem === null) console.error('Anchor element not found!')

    this.#layout = document.createElement('div')
    this.#layout.classList.add('layout')

    anchorElem?.append(this.#layout)
  }

  get playerOne(): Player {
    return this.#playerOne
  }

  get playerTwo(): Player {
    return this.#playerTwo
  }

  #showAlert(msg: string): void {
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

    this.#layout.append(alertContainer)
  }
  
  #resetLayout(): void {
    // clears entire layout so new displays can be shown
    this.#layout.innerHTML = ''
  }

  #resetWins() {
    this.#playerOne.wins = 0
    this.#playerTwo.wins = 0
  }

  #resetBoard(): void {
    this.#currentPlayer = this.#playerOne

    this.#board.iterate((item: BoardInfo) => {
      item.player = null
    })
  }

  #startHandler(playerOneName: string, playerTwoName: string): void {
    // makes sure names are unique
    if (playerOneName === '' || playerTwoName === '') {
      this.#showAlert('Both names are required.')
    } else if (playerOneName.toLowerCase() === playerTwoName.toLowerCase()) {
      playerTwoName.toLowerCase() === 'computer' ?
        this.#showAlert(`You can't share names with the Computer.`) :
        this.#showAlert(`Names can't be the same.`)
    } else {
      // updates player names if both names are unique
      this.#playerOne.name = playerOneName
      this.#playerTwo.name = playerTwoName
      
      this.#displayGame()
    }
  }

  #isWinner(): boolean {
    if (
      this.#board.arr[0][0].player === this.#currentPlayer &&
      this.#board.arr[0][1].player === this.#currentPlayer &&
      this.#board.arr[0][2].player === this.#currentPlayer
    ) {
      this.#board.arr[0][0].cell?.classList.add('winning-cell')
      this.#board.arr[0][1].cell?.classList.add('winning-cell')
      this.#board.arr[0][2].cell?.classList.add('winning-cell')
      return true 
    } else if (
      this.#board.arr[1][0].player === this.#currentPlayer &&
      this.#board.arr[1][1].player === this.#currentPlayer &&
      this.#board.arr[1][2].player === this.#currentPlayer
    ) {
      this.#board.arr[1][0].cell?.classList.add('winning-cell')
      this.#board.arr[1][1].cell?.classList.add('winning-cell')
      this.#board.arr[1][2].cell?.classList.add('winning-cell')
      return true 
    } else if (
      this.#board.arr[2][0].player === this.#currentPlayer &&
      this.#board.arr[2][1].player === this.#currentPlayer &&
      this.#board.arr[2][2].player === this.#currentPlayer
    ) {
      this.#board.arr[2][0].cell?.classList.add('winning-cell')
      this.#board.arr[2][1].cell?.classList.add('winning-cell')
      this.#board.arr[2][2].cell?.classList.add('winning-cell')
      return true 
    } else if (
      this.#board.arr[0][0].player === this.#currentPlayer &&
      this.#board.arr[1][0].player === this.#currentPlayer &&
      this.#board.arr[2][0].player === this.#currentPlayer
    ) {   
      this.#board.arr[0][0].cell?.classList.add('winning-cell')
      this.#board.arr[1][0].cell?.classList.add('winning-cell')
      this.#board.arr[2][0].cell?.classList.add('winning-cell')
      return true 
    } else if (
      this.#board.arr[0][1].player === this.#currentPlayer &&
      this.#board.arr[1][1].player === this.#currentPlayer &&
      this.#board.arr[2][1].player === this.#currentPlayer
    ) {
      this.#board.arr[0][1].cell?.classList.add('winning-cell')
      this.#board.arr[1][1].cell?.classList.add('winning-cell')
      this.#board.arr[2][1].cell?.classList.add('winning-cell')
      return true 
    } else if (
      this.#board.arr[0][2].player === this.#currentPlayer &&
      this.#board.arr[1][2].player === this.#currentPlayer &&
      this.#board.arr[2][2].player === this.#currentPlayer
    ) {
      this.#board.arr[0][2].cell?.classList.add('winning-cell')
      this.#board.arr[1][2].cell?.classList.add('winning-cell')
      this.#board.arr[2][2].cell?.classList.add('winning-cell')
      return true 
    } else if (
      this.#board.arr[0][0].player === this.#currentPlayer &&
      this.#board.arr[1][1].player === this.#currentPlayer &&
      this.#board.arr[2][2].player === this.#currentPlayer
    ) {
      this.#board.arr[0][0].cell?.classList.add('winning-cell')
      this.#board.arr[1][1].cell?.classList.add('winning-cell')
      this.#board.arr[2][2].cell?.classList.add('winning-cell')
      return true 
    } else if (
      this.#board.arr[0][2].player === this.#currentPlayer &&
      this.#board.arr[1][1].player === this.#currentPlayer &&
      this.#board.arr[2][0].player === this.#currentPlayer
    ) {
      this.#board.arr[0][2].cell?.classList.add('winning-cell')
      this.#board.arr[1][1].cell?.classList.add('winning-cell')
      this.#board.arr[2][0].cell?.classList.add('winning-cell')
      return true 
    } 
      
    return false
  }

  #isBoardFilled(): boolean {
    // used for counting the cells that are filled
    let counter = 0

    this.#board.iterate((item: BoardInfo) => {
      if(item.player) counter++
    })

    return counter >= this.#board.rows * this.#board.cols ? true : false
  }

  #switchCurrentPlayer(): void {
    this.#currentPlayer === this.#playerOne ?
      this.#currentPlayer = this.#playerTwo :
      this.#currentPlayer = this.#playerOne

    if(this.#currentPlayerHeader) {
      this.#currentPlayerHeader.innerText = `${this.#currentPlayer.name}'s Turn`
    }
  }

  #generateGameBoard(boardAnchor: HTMLElement): void {
    this.#board.iterate((item: BoardInfo) => {
      const newCell = DOMElement.create('div', ['cell'])
      item.cell = newCell      
      
      newCell.addEventListener('click', () => {
        if(!item.player) {
          item.player = this.#currentPlayer
          if(item.cell) item.cell.innerHTML = this.#currentPlayer.iconSVG
            
          if (this.#isWinner()) {
            this.#displayGameOver(`${this.#currentPlayer.name} is the winner!`)
            this.#currentPlayer.wins = this.#currentPlayer.wins + 1
          } else if (this.#isBoardFilled()) {
            this.#displayGameOver(`It's a tie!`)
          }

          this.#switchCurrentPlayer()
        }
      })
        
      boardAnchor.append(newCell)
    })
  }

  #mainMenuButton(): HTMLElement {
    const mainMenuBtn = DOMElement.create('button', ['btn'])
    mainMenuBtn.innerText = 'Main Menu'
    mainMenuBtn.addEventListener('click', () => {
      if (this.#playerTwo.name.toLowerCase() === 'computer') this.#playerTwo.resetName()
      this.#resetWins()
      this.#resetBoard()
      this.#displayStart()
    })

    return mainMenuBtn
  }
  
  #displayGame(): void {
    this.#resetLayout()

    // entire game board
    const gameBoard = DOMElement.create('div', ['game-board'])

    const winsContainer = DOMElement.create('div', ['wins-container'])
    gameBoard.append(winsContainer)
    
    // displays first player wins
    const firstPlayerWins = DOMElement.create('h3', ['first-wins'])
    firstPlayerWins.innerHTML = 
    `${this.#playerOne.name} Wins: <span>${this.#playerOne.wins}</span>`
    winsContainer.append(firstPlayerWins)
    
    // displays second player wins
    const secondPlayerWins = DOMElement.create('h3', ['second-wins'])
    secondPlayerWins.innerHTML = 
    `${this.#playerTwo.name} Wins: <span>${this.#playerTwo.wins}</span>`
    winsContainer.append(secondPlayerWins)
    
    // displays who's currently playing
    const playingHeader = DOMElement.create('h2', ['currently-playing'])
    this.#currentPlayerHeader = playingHeader
    playingHeader.innerText = `${this.#currentPlayer.name}'s Turn`
    gameBoard.append(playingHeader)

    const boardContainer = DOMElement.create('div', ['board'])
    // generating board
    this.#generateGameBoard(boardContainer)
    gameBoard.append(boardContainer)

    const btnsContainer = DOMElement.create('div', ['btns-container'])
    gameBoard.append(btnsContainer)

    const resetBtn = DOMElement.create('button', ['btn'])
    resetBtn.innerText = 'Reset'
    resetBtn.addEventListener('click', () => {
      this.#resetWins()
      this.#resetBoard()
      this.#displayGame()
    })
    btnsContainer.append(resetBtn)

    const mainMenuBtn = this.#mainMenuButton()
    btnsContainer.append(mainMenuBtn)

    this.#layout.append(gameBoard)
  }

  #displayStart(): void {
    this.#resetLayout()
    let isComputerPlaying: boolean = false

    const startMenu = DOMElement.create('div', ['start-menu'])
  
    // gamemode switcher
    const gameModeContainer = DOMElement.create('div', ['game-mode-container'])
    const pvpModeBtn = DOMElement.create('button', ['selected'])
    pvpModeBtn.innerText = '🤨 vs. 🤨'
    pvpModeBtn.addEventListener('click', () => {
      isComputerPlaying = false
      secondPlayerInput.style.display = 'initial'
      pvpModeBtn.classList.add('selected')
      pvcModeBtn.classList.remove('selected')
    })
    const pvcModeBtn = DOMElement.create('button')
    pvcModeBtn.innerText = '🤨 vs. 🤖'
    pvcModeBtn.addEventListener('click', () => {
      isComputerPlaying = true  
      secondPlayerInput.style.display = 'none'
      pvcModeBtn.classList.add('selected')
      pvpModeBtn.classList.remove('selected')
    })
    gameModeContainer.append(pvpModeBtn)
    gameModeContainer.append(pvcModeBtn)

    // player name inputs
    const inputContainer = DOMElement.create('div', ['input-container'])
    const firstPlayerInput = document.createElement('input')
    firstPlayerInput.setAttribute('id', 'firstPlayerInput')
    firstPlayerInput.setAttribute('placeholder', 'Player 1 Name')
    firstPlayerInput.value = this.#playerOne.name
    const secondPlayerInput = document.createElement('input')
    secondPlayerInput.setAttribute('id', 'secondPlayerInput')
    secondPlayerInput.setAttribute('placeholder', 'Player 2 Name')
    secondPlayerInput.value = this.#playerTwo.name
    inputContainer.append(firstPlayerInput)
    inputContainer.append(secondPlayerInput)

    // start button
    const startBtn = DOMElement.create('button', ['btn'])
    startBtn.innerText = 'Play'
    startBtn.addEventListener('click', () => {
      if (isComputerPlaying) {
        this.#startHandler(firstPlayerInput.value, 'Computer')
      } else {
        this.#startHandler(firstPlayerInput.value, secondPlayerInput.value)
      }
    })

    startMenu.append(gameModeContainer)
    startMenu.append(inputContainer)
    startMenu.append(startBtn)
    this.#layout.append(startMenu)
  }

  #displayGameOver(msg: string): void {
    const gameBoard = document.querySelector('.game-board')
    if(gameBoard) DOMElement.removeAllChildren(gameBoard, ['board'])
  
    const gameOverContainer = DOMElement.create('div', ['alert'])

    const h2 = DOMElement.create('h2')
    h2.innerText = msg
  
    const dismissBtn = DOMElement.create('button', ['btn'])
    dismissBtn.innerText = 'Continue'
    dismissBtn.addEventListener('click', () => {
      this.#board.iterate((item: BoardInfo) => {
        item.player = null
      })
      this.#displayGame()
    })
  
    const mainMenuBtn = this.#mainMenuButton()
  
    gameOverContainer.append(h2)
    gameOverContainer.append(dismissBtn)
    gameOverContainer.append(mainMenuBtn)
  
    this.#layout.append(gameOverContainer)
  }

  run(): void {
    this.#displayStart()
  }
}
