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
var _Array2D_arr, _Array2D_rows, _Array2D_cols;
export default class Array2D {
    constructor(el, rows, cols) {
        _Array2D_arr.set(this, []);
        _Array2D_rows.set(this, void 0);
        _Array2D_cols.set(this, void 0);
        __classPrivateFieldSet(this, _Array2D_rows, rows, "f");
        __classPrivateFieldSet(this, _Array2D_cols, cols, "f");
        for (let i = 0; i < rows; i++) {
            const rowArr = [];
            for (let j = 0; j < cols; j++) {
                if (typeof el === 'object') {
                    rowArr.push(Object.assign({}, el));
                }
                else {
                    rowArr.push(el);
                }
            }
            __classPrivateFieldGet(this, _Array2D_arr, "f").push(rowArr);
        }
    }
    get arr() {
        return __classPrivateFieldGet(this, _Array2D_arr, "f");
    }
    get rows() {
        return __classPrivateFieldGet(this, _Array2D_rows, "f");
    }
    get cols() {
        return __classPrivateFieldGet(this, _Array2D_cols, "f");
    }
    // iterates through the array and executes callback with passed in parameters
    iterate(func) {
        __classPrivateFieldGet(this, _Array2D_arr, "f").forEach((row, x) => {
            row.forEach((item, y) => {
                func(item, x, y);
            });
        });
    }
}
_Array2D_arr = new WeakMap(), _Array2D_rows = new WeakMap(), _Array2D_cols = new WeakMap();
