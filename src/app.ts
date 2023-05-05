import Game from "./classes/Game.js"
import Player from "./classes/Player.js"

const p1 = new Player('Player 1', 'x')
const p2 = new Player('Player 2', 'o') 
const game: Game = new Game('game-container', p1, p2)

game.run()