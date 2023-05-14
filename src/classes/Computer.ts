import Player from "./Player.js";
import DimensionalArray from "./DimensionalArray.js";
import { BoardInfo, Icon } from "../types"

export default class Computer extends Player {
  #isPlaying: boolean
  
  constructor(icon: Icon, isPlaying = false) {
    super('Computer', icon)
    this.#isPlaying = isPlaying
  }

  get isPlaying(): boolean {
    return this.#isPlaying
  }

  set isPlaying(b: boolean) {
    this.#isPlaying = b
  }

  makeChoice(board: DimensionalArray<BoardInfo>): void {
    const choice: {x: number |null, y: number |null} = {
      x: null,
      y: null
    }

    board.iterate((item: BoardInfo, x: number, y: number) => {
      if(!item.player) {
        choice.x = x
        choice.y = y
      }
    })

    if(choice.x !== null && choice.y !== null) {
      const item = board.arr[choice.x][choice.y]
      item.player = this
      if(item.cell) item.cell.innerHTML = this.iconSVG
    }

    console.log(board.arr)
  }
}