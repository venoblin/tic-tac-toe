export default class DOMElement {
    static create(tag, classNames) {
        const elem = document.createElement(tag);
        if (classNames) {
            classNames.forEach((cl) => {
                elem.classList.add(cl);
            });
        }
        return elem;
    }
}
