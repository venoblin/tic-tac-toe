export default class Array2D<T> {
  #arr: T[][] = []
  #rows: number
  #cols: number

  constructor(el: T,rows: number, cols: number) {
    this.#rows = rows
    this.#cols = cols

    for (let i = 0; i < rows; i++) {
      const rowArr: T[] = []
      for (let j = 0; j < cols; j++) {
        if(typeof el === 'object') {
          rowArr.push({...el})
        } else {
          rowArr.push(el)
        }
      }

      this.#arr.push(rowArr) 
    }
  }

  get arr(): T[][] {
    return this.#arr
  }

  get rows(): number {
    return this.#rows
  }

  get cols(): number {
    return this.#cols
  }
}