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
var _Player_name, _Game_instances, _Game_layout, _Game_playerOne, _Game_playerTwo, _Game_showAlert, _Game_startHandler;
class Player {
    constructor(name) {
        _Player_name.set(this, void 0);
        __classPrivateFieldSet(this, _Player_name, name, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Player_name, "f");
    }
    updateName(name) {
        __classPrivateFieldSet(this, _Player_name, name, "f");
    }
}
_Player_name = new WeakMap();
export class Game {
    constructor(options) {
        _Game_instances.add(this);
        _Game_layout.set(this, void 0);
        _Game_playerOne.set(this, void 0);
        _Game_playerTwo.set(this, void 0);
        __classPrivateFieldSet(this, _Game_playerOne, new Player('Player 1'), "f");
        __classPrivateFieldSet(this, _Game_playerTwo, new Player('Player 2'), "f");
        // creating and anchoring layout element to anchor element  
        const anchorElem = document.getElementById(options.anchorId);
        if (anchorElem === null) {
            console.error('Anchor element not found!');
        }
        __classPrivateFieldSet(this, _Game_layout, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _Game_layout, "f").classList.add('layout');
        anchorElem === null || anchorElem === void 0 ? void 0 : anchorElem.append(__classPrivateFieldGet(this, _Game_layout, "f"));
    }
    displayStart() {
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
    }
}
_Game_layout = new WeakMap(), _Game_playerOne = new WeakMap(), _Game_playerTwo = new WeakMap(), _Game_instances = new WeakSet(), _Game_showAlert = function _Game_showAlert(msg) {
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
}, _Game_startHandler = function _Game_startHandler(playerOneName, playerTwoName) {
    if (playerOneName === '' || playerTwoName === '') {
        __classPrivateFieldGet(this, _Game_instances, "m", _Game_showAlert).call(this, 'Both names are required.');
    }
    else if (playerOneName.toLowerCase() === playerTwoName.toLowerCase()) {
        if (playerTwoName === 'Computer') {
            __classPrivateFieldGet(this, _Game_instances, "m", _Game_showAlert).call(this, `You can't share names with the Computer.`);
        }
        else {
            __classPrivateFieldGet(this, _Game_instances, "m", _Game_showAlert).call(this, `Names can't be the same.`);
        }
    }
    else {
        console.log(`starting game... p1: ${playerOneName} and p2: ${playerTwoName}`);
    }
};
