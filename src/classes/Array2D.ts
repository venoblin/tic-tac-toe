export default class Array2D<T> {
  #arr: T[][] = []

  constructor(el: T,rows: number, cols: number) {
    for (let i = 0; i < rows; i++) {
      const rowArr: T[] = []
      for (let j = 0; j < cols; j++) {
        rowArr.push(el)
      }

      this.#arr.push(rowArr) 
    }
  }

  get arr(): T[][] {
    return this.#arr
  }
}