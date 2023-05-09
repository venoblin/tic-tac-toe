import Player from "./classes/Player.js"

  export type Icon = 'x' | 'o'

  export type IconObject = {x: string, o: string}

  export type BoardInfo = {
    cell: null | HTMLDivElement,
    player: null | Player 
  }
