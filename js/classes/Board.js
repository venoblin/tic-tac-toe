import DimensionalArray from "./DimensionalArray.js";
export default class Board extends DimensionalArray {
    constructor(rows, cols) {
        super({ cell: null, player: null }, rows, cols);
    }
}
