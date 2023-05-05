import Player from "./classes/Player.js"

export type Array2D = [
    [Player | null, Player | null, Player | null],
    [Player | null, Player | null, Player | null],
    [Player | null, Player | null, Player | null]
  ]

  export type Icon = 'x' | 'o'

  export type IconObject = {x: string, o: string}
