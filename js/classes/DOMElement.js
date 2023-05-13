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
var _DOMElement_elem;
export default class DOMElement {
    constructor(tag, classNames) {
        _DOMElement_elem.set(this, void 0);
        __classPrivateFieldSet(this, _DOMElement_elem, document.createElement(tag), "f");
        if (classNames.length) {
            classNames.forEach((cl) => {
                __classPrivateFieldGet(this, _DOMElement_elem, "f").classList.add(cl);
            });
        }
    }
    create() {
        return __classPrivateFieldGet(this, _DOMElement_elem, "f");
    }
}
_DOMElement_elem = new WeakMap();
