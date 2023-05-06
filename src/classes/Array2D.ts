export default class Array2D<T = null> {
  #arr: any[] = []

  constructor(el: T,rows: number, cols: number) {
    for (let i = 0; i < rows; i++) {
      const rowArr: T[] = []
      for (let j = 0; j < cols; j++) {
        rowArr.push(el)
      }

      this.#arr.push(rowArr) 
    }
  }

  get array2D(): T[] {
    return this.#arr
  }
}