class Player {
  #name: string
  #isComputer: boolean
  #wins: number = 0

  constructor(name: string, isComputer: boolean = false) {
    this.#name = name
    this.#isComputer = isComputer
  }

  get name(): string {
    return this.#name
  }

  get isComputer(): boolean {
    return this.#isComputer
  }

  get wins(): number {
    return this.#wins
  }

  set name(name: string) {
    this.#name = name
  }

  set isComputer(b: boolean) {
    this.#isComputer = b
  }
}

export class Game {
  #layout: HTMLElement
  #playerOne: Player
  #playerTwo: Player

  constructor(options: {anchorId: string}) {
    this.#playerOne = new Player('Player 1')
    this.#playerTwo = new Player('Player 2')

    // creating and anchoring layout element to anchor element  
    const anchorElem = document.getElementById(options.anchorId)
    if (anchorElem === null) {
      console.error('Anchor element not found!')
    }

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

  #showAlert(msg: string) {
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
  
  #resetLayout() {
    // clears entire layout so new displays can be shown
    this.#layout.innerHTML = ''
  }

  #startHandler(playerOneName: string, playerTwoName: string) {
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
    }
  }

  displayGame() {
    this.#resetLayout()

    const gameBoard = document.createElement('div')
    gameBoard.classList.add('game-board')

    const winsContainer = document.createElement('div')
    winsContainer.classList.add('wins-container')

    const firstPlayerWins = document.createElement('h3')
    firstPlayerWins.classList.add('first-wins')
    firstPlayerWins.innerHTML = 
      `${this.#playerOne.name} Wins: <span>${this.#playerOne.wins}</span>`

    const secondPlayerWins = document.createElement('h3')
    secondPlayerWins.classList.add('second-wins')
    secondPlayerWins.innerHTML = 
      `${this.#playerTwo.name} Wins: <span>${this.#playerTwo.wins}</span>`
    
    const playingHeader = document.createElement('h2')
    playingHeader.classList.add('currently-playing')
    playingHeader.innerText = `${this.#playerOne.name}'s Turn`

    const board = document.createElement('div')
    board.classList.add('board')

    const btnsContainer = document.createElement('div')
    btnsContainer.classList.add('btns-container')

    const resetBtn = document.createElement('button')
    resetBtn.innerText = 'Reset'
    resetBtn.classList.add('btn')

    const mainMenuBtn = document.createElement('button')
    mainMenuBtn.innerText = 'Main Menu'
    mainMenuBtn.classList.add('btn')
    mainMenuBtn.addEventListener('click', this.displayStart)

    winsContainer.append(firstPlayerWins)
    winsContainer.append(secondPlayerWins)
    btnsContainer.append(resetBtn)
    btnsContainer.append(mainMenuBtn)

    gameBoard.append(winsContainer)
    gameBoard.append(playingHeader)
    gameBoard.append(board)
    gameBoard.append(btnsContainer)

    this.#layout.append(gameBoard)
  }

  displayStart() {
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

      this.displayGame()
    })

    startMenu.append(gameModeContainer)
    startMenu.append(inputContainer)
    startMenu.append(startBtn)
    this.#layout.append(startMenu)
  }
}
