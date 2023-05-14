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
var _Computer_isPlaying;
import Player from "./Player.js";
export default class Computer extends Player {
    constructor(icon, isPlaying = false) {
        super('Computer', icon);
        _Computer_isPlaying.set(this, void 0);
        __classPrivateFieldSet(this, _Computer_isPlaying, isPlaying, "f");
    }
    get isPlaying() {
        return __classPrivateFieldGet(this, _Computer_isPlaying, "f");
    }
    set isPlaying(b) {
        __classPrivateFieldSet(this, _Computer_isPlaying, b, "f");
    }
}
_Computer_isPlaying = new WeakMap();
