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
var _Player_name, _Player_initialName, _Player_isComputer, _Player_wins, _Player_icons;
export default class Player {
    constructor(obj) {
        _Player_name.set(this, void 0);
        _Player_initialName.set(this, void 0); // used to remember name given when first instantiated 
        _Player_isComputer.set(this, void 0);
        _Player_wins.set(this, 0);
        _Player_icons.set(this, {
            x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>',
            o: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"/></svg>'
        });
        __classPrivateFieldSet(this, _Player_name, obj.name, "f");
        __classPrivateFieldSet(this, _Player_initialName, obj.name, "f");
        __classPrivateFieldSet(this, _Player_isComputer, obj.isComputer || false, "f");
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
_Player_name = new WeakMap(), _Player_initialName = new WeakMap(), _Player_isComputer = new WeakMap(), _Player_wins = new WeakMap(), _Player_icons = new WeakMap();
