import Player from "./Player.js";
import { Icon } from "../types"

export default class Computer extends Player {
  constructor(icon: Icon) {
    super('Computer', icon)
  }
}