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
  getCell(x: number, y: number): string {
    return this.#board[x][y]
  }

  generateGameBoard(boardAnchor: HTMLElement, clickHandler: Function): void {
    this.#board.forEach((row, x) => {
      row.forEach((col, y) => {
        const newCell = document.createElement('div')
        newCell.classList.add('cell')

        newCell.addEventListener('click', () => {
          console.clear()
          clickHandler()
          console.log('x: ' + x)
          console.log('y: ' + y)
        })
        
        boardAnchor.append(newCell)
      })
    })
  }
}