import DimensionalArray from "./DimensionalArray.js"
import DOMElement from "./DOMElement.js"
import { BoardInfo } from "../types"

export default class Board extends DimensionalArray<BoardInfo> {
  
  constructor(rows: number, cols: number) {
    super({cell: null, player: null}, rows, cols)
  }
}