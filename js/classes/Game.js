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
var _Game_instances, _Game_layout, _Game_playerOne, _Game_playerTwo, _Game_currentPlayer, _Game_board, _Game_showAlert, _Game_resetLayout, _Game_resetBoard, _Game_startHandler, _Game_checkWinner, _Game_switchCurrentPlayer, _Game_generateGameBoard, _Game_displayGame, _Game_displayStart;
export default class Game {
    constructor(anchorId, playerOne, playerTwo) {
        _Game_instances.add(this);
        _Game_layout.set(this, void 0);
        _Game_playerOne.set(this, void 0);
        _Game_playerTwo.set(this, void 0);
        _Game_currentPlayer.set(this, void 0);
        _Game_board.set(this, void 0);
        __classPrivateFieldSet(this, _Game_playerOne, playerOne, "f");
        __classPrivateFieldSet(this, _Game_playerTwo, playerTwo, "f");
        __classPrivateFieldSet(this, _Game_currentPlayer, __classPrivateFieldGet(this, _Game_playerOne, "f"), "f");
        __classPrivateFieldSet(this, _Game_board, [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ], "f");
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
_Game_layout = new WeakMap(), _Game_playerOne = new WeakMap(), _Game_playerTwo = new WeakMap(), _Game_currentPlayer = new WeakMap(), _Game_board = new WeakMap(), _Game_instances = new WeakSet(), _Game_showAlert = function _Game_showAlert(msg) {
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
}, _Game_resetBoard = function _Game_resetBoard() {
    __classPrivateFieldGet(this, _Game_playerOne, "f").wins = 0;
    __classPrivateFieldGet(this, _Game_playerTwo, "f").wins = 0;
    __classPrivateFieldSet(this, _Game_currentPlayer, __classPrivateFieldGet(this, _Game_playerOne, "f"), "f");
    __classPrivateFieldSet(this, _Game_board, [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ], "f");
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
        if (playerTwoName.toLowerCase() === 'computer')
            __classPrivateFieldGet(this, _Game_playerTwo, "f").isComputer = true;
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayGame).call(this);
    }
}, _Game_checkWinner = function _Game_checkWinner() {
    if (__classPrivateFieldGet(this, _Game_board, "f")[0][0] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[0][1] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[0][2] === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        cells[0].classList.add('winning-cell');
        cells[1].classList.add('winning-cell');
        cells[2].classList.add('winning-cell');
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f")[1][0] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[1][1] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[1][2] === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        cells[3].classList.add('winning-cell');
        cells[4].classList.add('winning-cell');
        cells[5].classList.add('winning-cell');
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f")[2][0] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[2][1] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[2][2] === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        cells[6].classList.add('winning-cell');
        cells[7].classList.add('winning-cell');
        cells[8].classList.add('winning-cell');
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f")[0][0] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[1][0] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[2][0] === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        cells[0].classList.add('winning-cell');
        cells[3].classList.add('winning-cell');
        cells[6].classList.add('winning-cell');
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f")[0][1] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[1][1] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[2][1] === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        cells[1].classList.add('winning-cell');
        cells[4].classList.add('winning-cell');
        cells[7].classList.add('winning-cell');
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f")[0][2] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[1][2] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[2][2] === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        cells[2].classList.add('winning-cell');
        cells[5].classList.add('winning-cell');
        cells[8].classList.add('winning-cell');
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f")[0][0] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[1][1] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[2][2] === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        cells[0].classList.add('winning-cell');
        cells[4].classList.add('winning-cell');
        cells[8].classList.add('winning-cell');
    }
    else if (__classPrivateFieldGet(this, _Game_board, "f")[0][2] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[1][1] === __classPrivateFieldGet(this, _Game_currentPlayer, "f") &&
        __classPrivateFieldGet(this, _Game_board, "f")[2][0] === __classPrivateFieldGet(this, _Game_currentPlayer, "f")) {
        cells[2].classList.add('winning-cell');
        cells[4].classList.add('winning-cell');
        cells[6].classList.add('winning-cell');
    }
}, _Game_switchCurrentPlayer = function _Game_switchCurrentPlayer() {
    __classPrivateFieldGet(this, _Game_currentPlayer, "f") === __classPrivateFieldGet(this, _Game_playerOne, "f") ?
        __classPrivateFieldSet(this, _Game_currentPlayer, __classPrivateFieldGet(this, _Game_playerTwo, "f"), "f") :
        __classPrivateFieldSet(this, _Game_currentPlayer, __classPrivateFieldGet(this, _Game_playerOne, "f"), "f");
}, _Game_generateGameBoard = function _Game_generateGameBoard(boardAnchor) {
    __classPrivateFieldGet(this, _Game_board, "f").forEach((row, x) => {
        row.forEach((player, y) => {
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            if (player) {
                newCell.innerHTML = player.getIcon();
            }
            newCell.addEventListener('click', () => {
                if (__classPrivateFieldGet(this, _Game_board, "f")[x][y] === null) {
                    __classPrivateFieldGet(this, _Game_board, "f")[x][y] = __classPrivateFieldGet(this, _Game_currentPlayer, "f");
                    __classPrivateFieldGet(this, _Game_instances, "m", _Game_switchCurrentPlayer).call(this);
                    __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayGame).call(this);
                }
            });
            boardAnchor.append(newCell);
        });
    });
}, _Game_displayGame = function _Game_displayGame() {
    __classPrivateFieldGet(this, _Game_instances, "m", _Game_resetLayout).call(this);
    // entire game board
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game-board');
    const winsContainer = document.createElement('div');
    winsContainer.classList.add('wins-container');
    gameBoard.append(winsContainer);
    // displays first player wins
    const firstPlayerWins = document.createElement('h3');
    firstPlayerWins.classList.add('first-wins');
    firstPlayerWins.innerHTML =
        `${__classPrivateFieldGet(this, _Game_playerOne, "f").name} Wins: <span>${__classPrivateFieldGet(this, _Game_playerOne, "f").wins}</span>`;
    winsContainer.append(firstPlayerWins);
    // displays second player wins
    const secondPlayerWins = document.createElement('h3');
    secondPlayerWins.classList.add('second-wins');
    secondPlayerWins.innerHTML =
        `${__classPrivateFieldGet(this, _Game_playerTwo, "f").name} Wins: <span>${__classPrivateFieldGet(this, _Game_playerTwo, "f").wins}</span>`;
    winsContainer.append(secondPlayerWins);
    // displays who's currently playing
    const playingHeader = document.createElement('h2');
    playingHeader.classList.add('currently-playing');
    playingHeader.innerText = `${__classPrivateFieldGet(this, _Game_currentPlayer, "f").name}'s Turn`;
    gameBoard.append(playingHeader);
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board');
    // generating board
    __classPrivateFieldGet(this, _Game_instances, "m", _Game_generateGameBoard).call(this, boardContainer);
    gameBoard.append(boardContainer);
    const btnsContainer = document.createElement('div');
    btnsContainer.classList.add('btns-container');
    gameBoard.append(btnsContainer);
    const resetBtn = document.createElement('button');
    resetBtn.innerText = 'Reset';
    resetBtn.classList.add('btn');
    resetBtn.addEventListener('click', () => {
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_resetBoard).call(this);
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayGame).call(this);
    });
    btnsContainer.append(resetBtn);
    const mainMenuBtn = document.createElement('button');
    mainMenuBtn.innerText = 'Main Menu';
    mainMenuBtn.classList.add('btn');
    mainMenuBtn.addEventListener('click', () => {
        if (__classPrivateFieldGet(this, _Game_playerTwo, "f").name.toLowerCase() === 'computer')
            __classPrivateFieldGet(this, _Game_playerTwo, "f").resetName();
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_resetBoard).call(this);
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_displayStart).call(this);
    });
    btnsContainer.append(mainMenuBtn);
    __classPrivateFieldGet(this, _Game_layout, "f").append(gameBoard);
}, _Game_displayStart = function _Game_displayStart() {
    __classPrivateFieldGet(this, _Game_instances, "m", _Game_resetLayout).call(this);
    let isComputerPlaying = false;
    const startMenu = document.createElement('div');
    startMenu.classList.add('start-menu');
    // gamemode switcher
    const gameModeContainer = document.createElement('div');
    gameModeContainer.classList.add('game-mode-container');
    const pvpModeBtn = document.createElement('button');
    pvpModeBtn.classList.add('selected');
    pvpModeBtn.innerText = '🤨 vs. 🤨';
    pvpModeBtn.addEventListener('click', () => {
        isComputerPlaying = false;
        secondPlayerInput.style.display = 'initial';
        pvpModeBtn.classList.add('selected');
        pvcModeBtn.classList.remove('selected');
    });
    const pvcModeBtn = document.createElement('button');
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
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
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
    const startBtn = document.createElement('button');
    startBtn.classList.add('btn');
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
};
