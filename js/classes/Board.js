var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Board_board;
export default class Board {
    constructor() {
        _Board_board.set(this, void 0);
        __classPrivateFieldSet(this, _Board_board, [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ], "f");
    }
    generateGameBoard(boardAnchor) {
        __classPrivateFieldGet(this, _Board_board, "f").forEach((row, x) => {
            row.forEach((col, y) => {
                const newCell = document.createElement('div');
                newCell.classList.add('cell');
                newCell.addEventListener('click', () => {
                    console.log(`row: ${x}`);
                    console.log(`col: ${y}`);
                });
                boardAnchor.append(newCell);
            });
        });
    }
}
_Board_board = new WeakMap();
