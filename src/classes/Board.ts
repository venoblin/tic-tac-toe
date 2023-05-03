import { BoardArray } from "../types"

export default class Board {
  #board: BoardArray

  constructor() {
    this.#board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  }

  generateGameBoard(boardAnchor: HTMLElement): void {
    this.#board.forEach((row, x) => {
      row.forEach((col, y) => {
        const newCell = document.createElement('div')
        newCell.classList.add('cell')

        newCell.addEventListener('click', () => {
          console.log(`row: ${x}`)
          console.log(`col: ${y}`)
        })
        
        boardAnchor.append(newCell)
      })
    })
  }
}