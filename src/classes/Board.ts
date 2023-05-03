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

  // gets a board cell using coordinates 
  getCell(x: number, y: number) {
    return this.#board[x][y]
  }

  generateGameBoard(boardAnchor: HTMLElement): void {
    this.#board.forEach((row, x) => {
      row.forEach((col, y) => {
        const newCell = document.createElement('div')
        newCell.classList.add('cell')

        newCell.addEventListener('click', () => {
          console.clear()
          console.log(this.getCell(x, y))
        })
        
        boardAnchor.append(newCell)
      })
    })
  }
}