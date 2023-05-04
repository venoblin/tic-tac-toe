import Player from "./Player.js"
import { BoardArray } from "../types"

export default class Game {
  #layout: HTMLElement
  #playerOne: Player
  #playerTwo: Player
  #currentPlayer: Player
  #board: BoardArray

  constructor(options: {anchorId: string}) {
    this.#playerOne = new Player({name: 'Player 1', icon: 'x'})
    this.#playerTwo = new Player({name: 'Player 2', icon: 'o'})
    this.#currentPlayer = this.#playerOne
    this.#board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]

    // creating and anchoring layout element to anchor element  
    const anchorElem = document.getElementById(options.anchorId)
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

  #resetBoard(): void {
    this.#playerOne.wins = 0
    this.#playerTwo.wins = 0
    this.#currentPlayer = this.#playerOne
    this.#board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

  #startHandler(playerOneName: string, playerTwoName: string): void {
    // makes sure names are unique
    if (playerOneName === '' || playerTwoName === '') {
      this.#showAlert('Both names are required.')
    } else if (playerOneName.toLowerCase() === playerTwoName.toLowerCase()) {
      playerTwoName === 'Computer' ?
        this.#showAlert(`You can't share names with the Computer.`) :
        this.#showAlert(`Names can't be the same.`)
    } else {
      // updates player names if both names are unique
      this.#playerOne.name = playerOneName
      this.#playerTwo.name = playerTwoName
        
      if(playerTwoName.toLowerCase() === 'computer') this.#playerTwo.isComputer = true
      this.#displayGame()
    }
  }

  #switchCurrentPlayer(): void {
    this.#currentPlayer === this.#playerOne ?
      this.#currentPlayer = this.#playerTwo :
      this.#currentPlayer = this.playerOne
  }

  #generateGameBoard(boardAnchor: HTMLElement): void {
    this.#board.forEach((row: Array<Player | null>, x: number) => {
      row.forEach((player: Player | null, y: number) => {
        const newCell = document.createElement('div')
        newCell.classList.add('cell')

        if (player) {
          newCell.innerHTML = player.getIcon()
        }

        newCell.addEventListener('click', () => {
          this.#board[x][y] = this.#currentPlayer

          console.log(this.#board)

          this.#switchCurrentPlayer()
          this.#displayGame()
        })
        
        boardAnchor.append(newCell)
      })
    })
  }
  
    
  #displayGame(): void {
    this.#resetLayout()
      
    // entire game board
    const gameBoard = document.createElement('div')
    gameBoard.classList.add('game-board')
      
    const winsContainer = document.createElement('div')
    winsContainer.classList.add('wins-container')
    gameBoard.append(winsContainer)
    
    // displays first player wins
    const firstPlayerWins = document.createElement('h3')
    firstPlayerWins.classList.add('first-wins')
    firstPlayerWins.innerHTML = 
    `${this.#playerOne.name} Wins: <span>${this.#playerOne.wins}</span>`
    winsContainer.append(firstPlayerWins)
    
    // displays second player wins
    const secondPlayerWins = document.createElement('h3')
    secondPlayerWins.classList.add('second-wins')
    secondPlayerWins.innerHTML = 
    `${this.#playerTwo.name} Wins: <span>${this.#playerTwo.wins}</span>`
    winsContainer.append(secondPlayerWins)
    
    // displays who's currently playing
    const playingHeader = document.createElement('h2')
    playingHeader.classList.add('currently-playing')
    playingHeader.innerText = `${this.#currentPlayer.name}'s Turn`
    gameBoard.append(playingHeader)

    const boardContainer = document.createElement('div')
    boardContainer.classList.add('board')
    // generating board
    this.#generateGameBoard(boardContainer)
    gameBoard.append(boardContainer)

    const btnsContainer = document.createElement('div')
    btnsContainer.classList.add('btns-container')
    gameBoard.append(btnsContainer)

    const resetBtn = document.createElement('button')
    resetBtn.innerText = 'Reset'
    resetBtn.classList.add('btn')
    resetBtn.addEventListener('click', () => {
      this.#resetBoard()
      this.#displayGame()
    })
    btnsContainer.append(resetBtn)

    const mainMenuBtn = document.createElement('button')
    mainMenuBtn.innerText = 'Main Menu'
    mainMenuBtn.classList.add('btn')
    mainMenuBtn.addEventListener('click', () => {
      if (this.#playerTwo.name.toLowerCase() === 'computer') this.#playerTwo.resetName()
      this.#resetBoard()
      this.#displayStart()
    })
    btnsContainer.append(mainMenuBtn)

    this.#layout.append(gameBoard)
  }

  #displayStart(): void {
    this.#resetLayout()
    let isComputerPlaying: boolean = false

    const startMenu = document.createElement('div')
    startMenu.classList.add('start-menu')

    // gamemode switcher
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
    gameModeContainer.append(pvpModeBtn)
    gameModeContainer.append(pvcModeBtn)

    // player name inputs
    const inputContainer = document.createElement('div')
    inputContainer.classList.add('input-container')
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
    const startBtn = document.createElement('button')
    startBtn.classList.add('btn')
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

  run(): void {
    this.#displayStart()
  }
}
