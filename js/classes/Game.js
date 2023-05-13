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
var _Game_instances, _Game_layout, _Game_playerOne, _Game_playerTwo, _Game_computer, _Game_currentPlayer, _Game_currentPlayerHeader, _Game_board, _Game_showAlert, _Game_resetLayout, _Game_resetWins, _Game_resetBoard, _Game_startHandler, _Game_isWinner, _Game_isBoardFilled, _Game_switchCurrentPlayer, _Game_generateGameBoard, _Game_mainMenuButton, _Game_displayGame, _Game_displayStart, _Game_displayGameOver;
import Computer from "./Computer.js";
import DOMElement from "./DOMElement.js";
import Array2D from "./Array2D.js";
import { removeAllChildren } from "../utils/index.js";
export default class Game {
    constructor(anchorId, playerOne, playerTwo) {
        _Game_instances.add(this);
        _Game_layout.set(this, void 0);
        _Game_playerOne.set(this, void 0);
        _Game_playerTwo.set(this, void 0);
        _Game_computer.set(this, void 0);
        _Game_currentPlayer.set(this, void 0);
        _Game_currentPlayerHeader.set(this, void 0);
        _Game_board.set(this, void 0);
        __classPrivateFieldSet(this, _Game_playerOne, playerOne, "f");
        __classPrivateFieldSet(this, _Game_playerTwo, playerTwo, "f");
        __classPrivateFieldSet(this, _Game_computer, new Computer(__classPrivateFieldGet(this, _Game_playerTwo, "f").icon), "f");
        __classPrivateFieldSet(this, _Game_currentPlayer, __classPrivateFieldGet(this, _Game_playerOne, "f"), "f");
        __classPrivateFieldSet(this, _Game_board, new Array2D({ cell: null, player: null }, 3, 3), "f");
        // creating and anchoring layout element to anchor element  
        const anchorElem = document.getElementById(anchorId);
        if (anchorElem === null)
            console.error('Anchor element not found!');
        __classPrivateFieldSet(this, _Game_layout, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _Game_layout, "f").classList.add('layout');
        anchorElem === null || anchorElem === void 0 ? void 0 : anchorElem.append(__classPrivateFieldGet(this, _Game_layout, "f"));
    }
    get playerOne() {
        return __classPrivateFieldGet(this, _Game_playerOne, "f");
    }
    get playerTwo() {
        return __classPrivateFieldGet(this, _Game_playerTwo, "f");
    }
    run() {
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayStart).call(this);
    }
}
_Game_layout = new WeakMap(), _Game_playerOne = new WeakMap(), _Game_playerTwo = new WeakMap(), _Game_computer = new WeakMap(), _Game_currentPlayer = new WeakMap(), _Game_currentPlayerHeader = new WeakMap(), _Game_board = new WeakMap(), _Game_instances = new WeakSet(), _Game_showAlert = function _Game_showAlert(msg) {
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert');
    const h2 = document.createElement('h2');
    h2.innerText = msg;
    const dismissBtn = document.createElement('button');
    dismissBtn.innerText = 'Ok';
    dismissBtn.classList.add('btn');
    dismissBtn.addEventListener('click', () => {
        alertContainer.remove();
    });
    alertContainer.append(h2);
    alertContainer.append(dismissBtn);
    __classPrivateFieldGet(this, _Game_layout, "f").append(alertContainer);
}, _Game_resetLayout = function _Game_resetLayout() {
    // clears entire layout so new displays can be shown
    __classPrivateFieldGet(this, _Game_layout, "f").innerHTML = '';
}, _Game_resetWins = function _Game_resetWins() {
    __classPrivateFieldGet(this, _Game_playerOne, "f").wins = 0;
    __classPrivateFieldGet(this, _Game_playerTwo, "f").wins = 0;
}, _Game_resetBoard = function _Game_resetBoard() {
    __classPrivateFieldSet(this, _Game_currentPlayer, __classPrivateFieldGet(this, _Game_playerOne, "f"), "f");
    __classPrivateFieldGet(this, _Game_board, "f").iterate((item) => {
        item.player = null;
    });
}, _Game_startHandler = function _Game_startHandler(playerOneName, playerTwoName) {
    // makes sure names are unique
    if (playerOneName === '' || playerTwoName === '') {
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_showAlert).call(this, 'Both names are required.');
    }
    else if (playerOneName.toLowerCase() === playerTwoName.toLowerCase()) {
        playerTwoName.toLowerCase() === 'computer' ?
            __classPrivateFieldGet(this, _Game_instances, "m", _Game_showAlert).call(this, `You can't share names with the Computer.`) :
            __classPrivateFieldGet(this, _Game_instances, "m", _Game_showAlert).call(this, `Names can't be the same.`);
    }
    else {
        // updates player names if both names are unique
        __classPrivateFieldGet(this, _Game_playerOne, "f").name = playerOneName;
        __classPrivateFieldGet(this, _Game_playerTwo, "f").name = playerTwoName;
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayGame).call(this);
    }
}, _Game_isWinner = function _Game_isWinner() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    if (__classPrivateFieldGet(this, _Game_board, "f").arr[0][0].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[0][1].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[0][2].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        (_a = __classPrivateFieldGet(this, _Game_board, "f").arr[0][0].cell) === null || _a === void 0 ? void 0 : _a.classList.add('winning-cell');
        (_b = __classPrivateFieldGet(this, _Game_board, "f").arr[0][1].cell) === null || _b === void 0 ? void 0 : _b.classList.add('winning-cell');
        (_c = __classPrivateFieldGet(this, _Game_board, "f").arr[0][2].cell) === null || _c === void 0 ? void 0 : _c.classList.add('winning-cell');
        return true;
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f").arr[1][0].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[1][1].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[1][2].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        (_d = __classPrivateFieldGet(this, _Game_board, "f").arr[1][0].cell) === null || _d === void 0 ? void 0 : _d.classList.add('winning-cell');
        (_e = __classPrivateFieldGet(this, _Game_board, "f").arr[1][1].cell) === null || _e === void 0 ? void 0 : _e.classList.add('winning-cell');
        (_f = __classPrivateFieldGet(this, _Game_board, "f").arr[1][2].cell) === null || _f === void 0 ? void 0 : _f.classList.add('winning-cell');
        return true;
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f").arr[2][0].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[2][1].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[2][2].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        (_g = __classPrivateFieldGet(this, _Game_board, "f").arr[2][0].cell) === null || _g === void 0 ? void 0 : _g.classList.add('winning-cell');
        (_h = __classPrivateFieldGet(this, _Game_board, "f").arr[2][1].cell) === null || _h === void 0 ? void 0 : _h.classList.add('winning-cell');
        (_j = __classPrivateFieldGet(this, _Game_board, "f").arr[2][2].cell) === null || _j === void 0 ? void 0 : _j.classList.add('winning-cell');
        return true;
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f").arr[0][0].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[1][0].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[2][0].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        (_k = __classPrivateFieldGet(this, _Game_board, "f").arr[0][0].cell) === null || _k === void 0 ? void 0 : _k.classList.add('winning-cell');
        (_l = __classPrivateFieldGet(this, _Game_board, "f").arr[1][0].cell) === null || _l === void 0 ? void 0 : _l.classList.add('winning-cell');
        (_m = __classPrivateFieldGet(this, _Game_board, "f").arr[2][0].cell) === null || _m === void 0 ? void 0 : _m.classList.add('winning-cell');
        return true;
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f").arr[0][1].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[1][1].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[2][1].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        (_o = __classPrivateFieldGet(this, _Game_board, "f").arr[0][1].cell) === null || _o === void 0 ? void 0 : _o.classList.add('winning-cell');
        (_p = __classPrivateFieldGet(this, _Game_board, "f").arr[1][1].cell) === null || _p === void 0 ? void 0 : _p.classList.add('winning-cell');
        (_q = __classPrivateFieldGet(this, _Game_board, "f").arr[2][1].cell) === null || _q === void 0 ? void 0 : _q.classList.add('winning-cell');
        return true;
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f").arr[0][2].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[1][2].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[2][2].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        (_r = __classPrivateFieldGet(this, _Game_board, "f").arr[0][2].cell) === null || _r === void 0 ? void 0 : _r.classList.add('winning-cell');
        (_s = __classPrivateFieldGet(this, _Game_board, "f").arr[1][2].cell) === null || _s === void 0 ? void 0 : _s.classList.add('winning-cell');
        (_t = __classPrivateFieldGet(this, _Game_board, "f").arr[2][2].cell) === null || _t === void 0 ? void 0 : _t.classList.add('winning-cell');
        return true;
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f").arr[0][0].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[1][1].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[2][2].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        (_u = __classPrivateFieldGet(this, _Game_board, "f").arr[0][0].cell) === null || _u === void 0 ? void 0 : _u.classList.add('winning-cell');
        (_v = __classPrivateFieldGet(this, _Game_board, "f").arr[1][1].cell) === null || _v === void 0 ? void 0 : _v.classList.add('winning-cell');
        (_w = __classPrivateFieldGet(this, _Game_board, "f").arr[2][2].cell) === null || _w === void 0 ? void 0 : _w.classList.add('winning-cell');
        return true;
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f").arr[0][2].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[1][1].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f").arr[2][0].player === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        (_x = __classPrivateFieldGet(this, _Game_board, "f").arr[0][2].cell) === null || _x === void 0 ? void 0 : _x.classList.add('winning-cell');
        (_y = __classPrivateFieldGet(this, _Game_board, "f").arr[1][1].cell) === null || _y === void 0 ? void 0 : _y.classList.add('winning-cell');
        (_z = __classPrivateFieldGet(this, _Game_board, "f").arr[2][0].cell) === null || _z === void 0 ? void 0 : _z.classList.add('winning-cell');
        return true;
    }
    return false;
}, _Game_isBoardFilled = function _Game_isBoardFilled() {
    // used for counting the cells that are filled
    let counter = 0;
    __classPrivateFieldGet(this, _Game_board, "f").iterate((item) => {
        if (item.player)
            counter++;
    });
    return counter >= __classPrivateFieldGet(this, _Game_board, "f").rows * __classPrivateFieldGet(this, _Game_board, "f").cols ? true : false;
}, _Game_switchCurrentPlayer = function _Game_switchCurrentPlayer() {
    __classPrivateFieldGet(this, _Game_currentPlayer, "f") === __classPrivateFieldGet(this, _Game_playerOne, "f") ?
        __classPrivateFieldSet(this, _Game_currentPlayer, __classPrivateFieldGet(this, _Game_playerTwo, "f"), "f") :
        __classPrivateFieldSet(this, _Game_currentPlayer, __classPrivateFieldGet(this, _Game_playerOne, "f"), "f");
    if (__classPrivateFieldGet(this, _Game_currentPlayerHeader, "f")) {
        __classPrivateFieldGet(this, _Game_currentPlayerHeader, "f").innerText = `${__classPrivateFieldGet(this, _Game_currentPlayer, "f").name}'s Turn`;
    }
}, _Game_generateGameBoard = function _Game_generateGameBoard(boardAnchor) {
    __classPrivateFieldGet(this, _Game_board, "f").iterate((item) => {
        const newCell = new DOMElement('div', ['cell']).create();
        item.cell = newCell;
        newCell.addEventListener('click', () => {
            if (!item.player) {
                item.player = __classPrivateFieldGet(this, _Game_currentPlayer, "f");
                if (item.cell)
                    item.cell.innerHTML = __classPrivateFieldGet(this, _Game_currentPlayer, "f").iconSVG;
                if (__classPrivateFieldGet(this, _Game_instances, "m", _Game_isWinner).call(this)) {
                    __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayGameOver).call(this, `${__classPrivateFieldGet(this, _Game_currentPlayer, "f").name} is the winner!`);
                    __classPrivateFieldGet(this, _Game_currentPlayer, "f").wins = __classPrivateFieldGet(this, _Game_currentPlayer, "f").wins + 1;
                }
                else if (__classPrivateFieldGet(this, _Game_instances, "m", _Game_isBoardFilled).call(this)) {
                    __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayGameOver).call(this, `It's a tie!`);
                }
                __classPrivateFieldGet(this, _Game_instances, "m", _Game_switchCurrentPlayer).call(this);
            }
        });
        boardAnchor.append(newCell);
    });
}, _Game_mainMenuButton = function _Game_mainMenuButton() {
    const mainMenuBtn = new DOMElement('button', ['btn']).create();
    mainMenuBtn.innerText = 'Main Menu';
    mainMenuBtn.addEventListener('click', () => {
        if (__classPrivateFieldGet(this, _Game_playerTwo, "f").name.toLowerCase() === 'computer')
            __classPrivateFieldGet(this, _Game_playerTwo, "f").resetName();
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_resetWins).call(this);
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_resetBoard).call(this);
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayStart).call(this);
    });
    return mainMenuBtn;
}, _Game_displayGame = function _Game_displayGame() {
    __classPrivateFieldGet(this, _Game_instances, "m", _Game_resetLayout).call(this);
    // entire game board
    const gameBoard = new DOMElement('div', ['game-board']).create();
    const winsContainer = new DOMElement('div', ['wins-container']).create();
    gameBoard.append(winsContainer);
    // displays first player wins
    const firstPlayerWins = new DOMElement('h3', ['first-wins']).create();
    firstPlayerWins.innerHTML =
        `${__classPrivateFieldGet(this, _Game_playerOne, "f").name} Wins: <span>${__classPrivateFieldGet(this, _Game_playerOne, "f").wins}</span>`;
    winsContainer.append(firstPlayerWins);
    // displays second player wins
    const secondPlayerWins = new DOMElement('h3', ['second-wins']).create();
    secondPlayerWins.innerHTML =
        `${__classPrivateFieldGet(this, _Game_playerTwo, "f").name} Wins: <span>${__classPrivateFieldGet(this, _Game_playerTwo, "f").wins}</span>`;
    winsContainer.append(secondPlayerWins);
    // displays who's currently playing
    const playingHeader = new DOMElement('h2', ['currently-playing']).create();
    __classPrivateFieldSet(this, _Game_currentPlayerHeader, playingHeader, "f");
    playingHeader.innerText = `${__classPrivateFieldGet(this, _Game_currentPlayer, "f").name}'s Turn`;
    gameBoard.append(playingHeader);
    const boardContainer = new DOMElement('div', ['board']).create();
    // generating board
    __classPrivateFieldGet(this, _Game_instances, "m", _Game_generateGameBoard).call(this, boardContainer);
    gameBoard.append(boardContainer);
    const btnsContainer = new DOMElement('div', ['btns-container']).create();
    gameBoard.append(btnsContainer);
    const resetBtn = new DOMElement('button', ['btn']).create();
    resetBtn.innerText = 'Reset';
    resetBtn.addEventListener('click', () => {
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_resetWins).call(this);
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_resetBoard).call(this);
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayGame).call(this);
    });
    btnsContainer.append(resetBtn);
    const mainMenuBtn = __classPrivateFieldGet(this, _Game_instances, "m", _Game_mainMenuButton).call(this);
    btnsContainer.append(mainMenuBtn);
    __classPrivateFieldGet(this, _Game_layout, "f").append(gameBoard);
}, _Game_displayStart = function _Game_displayStart() {
    __classPrivateFieldGet(this, _Game_instances, "m", _Game_resetLayout).call(this);
    let isComputerPlaying = false;
    const startMenu = new DOMElement('div', ['start-menu']).create();
    // gamemode switcher
    const gameModeContainer = new DOMElement('div', ['game-mode-container']).create();
    const pvpModeBtn = new DOMElement('button', ['selected']).create();
    pvpModeBtn.innerText = '🤨 vs. 🤨';
    pvpModeBtn.addEventListener('click', () => {
        isComputerPlaying = false;
        secondPlayerInput.style.display = 'initial';
        pvpModeBtn.classList.add('selected');
        pvcModeBtn.classList.remove('selected');
    });
    const pvcModeBtn = new DOMElement('button').create();
    pvcModeBtn.innerText = '🤨 vs. 🤖';
    pvcModeBtn.addEventListener('click', () => {
        isComputerPlaying = true;
        secondPlayerInput.style.display = 'none';
        pvcModeBtn.classList.add('selected');
        pvpModeBtn.classList.remove('selected');
    });
    gameModeContainer.append(pvpModeBtn);
    gameModeContainer.append(pvcModeBtn);
    // player name inputs
    const inputContainer = new DOMElement('div', ['input-container']).create();
    const firstPlayerInput = document.createElement('input');
    firstPlayerInput.setAttribute('id', 'firstPlayerInput');
    firstPlayerInput.setAttribute('placeholder', 'Player 1 Name');
    firstPlayerInput.value = __classPrivateFieldGet(this, _Game_playerOne, "f").name;
    const secondPlayerInput = document.createElement('input');
    secondPlayerInput.setAttribute('id', 'secondPlayerInput');
    secondPlayerInput.setAttribute('placeholder', 'Player 2 Name');
    secondPlayerInput.value = __classPrivateFieldGet(this, _Game_playerTwo, "f").name;
    inputContainer.append(firstPlayerInput);
    inputContainer.append(secondPlayerInput);
    // start button
    const startBtn = new DOMElement('button', ['btn']).create();
    startBtn.innerText = 'Play';
    startBtn.addEventListener('click', () => {
        if (isComputerPlaying) {
            __classPrivateFieldGet(this, _Game_instances, "m", _Game_startHandler).call(this, firstPlayerInput.value, 'Computer');
        }
        else {
            __classPrivateFieldGet(this, _Game_instances, "m", _Game_startHandler).call(this, firstPlayerInput.value, secondPlayerInput.value);
        }
    });
    startMenu.append(gameModeContainer);
    startMenu.append(inputContainer);
    startMenu.append(startBtn);
    __classPrivateFieldGet(this, _Game_layout, "f").append(startMenu);
}, _Game_displayGameOver = function _Game_displayGameOver(msg) {
    const gameBoard = document.querySelector('.game-board');
    if (gameBoard)
        removeAllChildren(gameBoard, ['board']);
    const gameOverContainer = new DOMElement('div', ['alert']).create();
    const h2 = new DOMElement('h2').create();
    h2.innerText = msg;
    const dismissBtn = new DOMElement('button', ['btn']).create();
    dismissBtn.innerText = 'Continue';
    dismissBtn.addEventListener('click', () => {
        __classPrivateFieldGet(this, _Game_board, "f").iterate((item) => {
            item.player = null;
        });
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayGame).call(this);
    });
    const mainMenuBtn = __classPrivateFieldGet(this, _Game_instances, "m", _Game_mainMenuButton).call(this);
    gameOverContainer.append(h2);
    gameOverContainer.append(dismissBtn);
    gameOverContainer.append(mainMenuBtn);
    __classPrivateFieldGet(this, _Game_layout, "f").append(gameOverContainer);
};
