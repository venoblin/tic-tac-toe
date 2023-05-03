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
var _Player_name, _Player_initialName, _Player_isComputer, _Player_wins;
export default class Player {
    constructor(name, isComputer = false) {
        _Player_name.set(this, void 0);
        _Player_initialName.set(this, void 0); // used to remember name given when first instantiated 
        _Player_isComputer.set(this, void 0);
        _Player_wins.set(this, 0);
        __classPrivateFieldSet(this, _Player_name, name, "f");
        __classPrivateFieldSet(this, _Player_initialName, name, "f");
        __classPrivateFieldSet(this, _Player_isComputer, isComputer, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Player_name, "f");
    }
    get initialName() {
        return __classPrivateFieldGet(this, _Player_initialName, "f");
    }
    get isComputer() {
        return __classPrivateFieldGet(this, _Player_isComputer, "f");
    }
    get wins() {
        return __classPrivateFieldGet(this, _Player_wins, "f");
    }
    set name(name) {
        __classPrivateFieldSet(this, _Player_name, name, "f");
    }
    set isComputer(b) {
        __classPrivateFieldSet(this, _Player_isComputer, b, "f");
    }
    set wins(amount) {
        __classPrivateFieldSet(this, _Player_wins, amount, "f");
    }
    resetName() {
        __classPrivateFieldSet(this, _Player_name, __classPrivateFieldGet(this, _Player_initialName, "f"), "f");
    }
}
_Player_name = new WeakMap(), _Player_initialName = new WeakMap(), _Player_isComputer = new WeakMap(), _Player_wins = new WeakMap();
