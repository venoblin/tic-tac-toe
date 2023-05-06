var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Array2D_arr;
export default class Array2D {
    constructor(el, rows, cols) {
        _Array2D_arr.set(this, []);
        for (let i = 0; i < rows; i++) {
            const rowArr = [];
            for (let j = 0; j < cols; j++) {
                rowArr.push(el);
            }
            __classPrivateFieldGet(this, _Array2D_arr, "f").push(rowArr);
        }
    }
    get array2D() {
        return __classPrivateFieldGet(this, _Array2D_arr, "f");
    }
}
_Array2D_arr = new WeakMap();
