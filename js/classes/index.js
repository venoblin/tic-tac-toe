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
var _Screen_instances, _Screen_layout, _Screen_showAlert;
export class Player {
    constructor(name) {
        this.name = name;
    }
}
export class Screen {
    constructor(options) {
        _Screen_instances.add(this);
        _Screen_layout.set(this, void 0);
        // creating and anchoring layout element to anchor element  
        const anchorElem = document.getElementById(options.anchorId);
        if (anchorElem === null) {
            console.error('Anchor element not found!');
        }
        __classPrivateFieldSet(this, _Screen_layout, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _Screen_layout, "f").classList.add('layout');
        anchorElem === null || anchorElem === void 0 ? void 0 : anchorElem.append(__classPrivateFieldGet(this, _Screen_layout, "f"));
    }
    displayStart() {
        const startMenu = document.createElement('div');
        startMenu.classList.add('start-menu');
        // gamemode switcher
        const gameModeContainer = document.createElement('div');
        gameModeContainer.classList.add('game-mode-container');
        const pvpModeBtn = document.createElement('button');
        pvpModeBtn.classList.add('selected');
        pvpModeBtn.innerText = '🤨 vs. 🤨';
        pvpModeBtn.addEventListener('click', () => {
            secondPlayerInput.style.display = 'initial';
            pvpModeBtn.classList.add('selected');
            pvcModeBtn.classList.remove('selected');
        });
        const pvcModeBtn = document.createElement('button');
        pvcModeBtn.innerText = '🤨 vs. 🤖';
        pvcModeBtn.addEventListener('click', () => {
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
        firstPlayerInput.value = 'Player 1';
        const secondPlayerInput = document.createElement('input');
        secondPlayerInput.setAttribute('id', 'secondPlayerInput');
        secondPlayerInput.setAttribute('placeholder', 'Player 2 Name');
        secondPlayerInput.value = 'Player 2';
        inputContainer.append(firstPlayerInput);
        inputContainer.append(secondPlayerInput);
        // start button
        const startBtn = document.createElement('button');
        startBtn.classList.add('btn');
        startBtn.innerText = 'Play';
        startMenu.append(gameModeContainer);
        startMenu.append(inputContainer);
        startMenu.append(startBtn);
        __classPrivateFieldGet(this, _Screen_layout, "f").append(startMenu);
    }
}
_Screen_layout = new WeakMap(), _Screen_instances = new WeakSet(), _Screen_showAlert = function _Screen_showAlert(msg) {
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
    __classPrivateFieldGet(this, _Screen_layout, "f").append(alertContainer);
};
