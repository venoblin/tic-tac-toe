import Player from "./classes/Player.js"

export type BoardArray = [
    [Player | null, Player | null, Player | null],
    [Player | null, Player | null, Player | null],
    [Player | null, Player | null, Player | null]
  ]

  export type Icon = 'x' | 'o'

  export type IconObject = {x: string, o: string}
