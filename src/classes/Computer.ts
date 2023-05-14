import Player from "./Player.js";
import { Icon } from "../types"

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
}