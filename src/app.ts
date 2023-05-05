import Game from "./classes/Game.js"
import Player from "./classes/Player.js"

const p1 = new Player({name: 'Player 1', icon: 'x'})
const p2 = new Player({name: 'Player 2', icon: 'o'}) 
const game: Game = new Game('game-container', p1, p2)

game.run()