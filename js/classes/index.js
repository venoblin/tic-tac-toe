export class Screen {
    constructor(anchor) {
        const anchorElem = document.getElementById(anchor);
        this.layout = document.createElement('div');
        this.layout.classList.add('layout');
        anchorElem === null || anchorElem === void 0 ? void 0 : anchorElem.append(this.layout);
    }
}
export class Player {
    constructor(name) {
        this.name = name;
    }
}
