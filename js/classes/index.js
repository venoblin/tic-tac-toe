export class Player {
    constructor(name) {
        this.name = name;
    }
}
export class Screen {
    constructor(anchor) {
        // creating and anchoring layout element to anchor element  
        const anchorElem = document.getElementById(anchor);
        if (anchorElem === null) {
            console.error('Anchor element not found!');
        }
        this.layout = document.createElement('div');
        this.layout.classList.add('layout');
        anchorElem === null || anchorElem === void 0 ? void 0 : anchorElem.append(this.layout);
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
        this.layout.append(startMenu);
    }
}
