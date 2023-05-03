export default class Player {
  #name: string
  #initialName: string // used to remember name given when first instantiated 
  #isComputer: boolean
  #wins: number = 0

  constructor(name: string, isComputer: boolean = false) {
    this.#name = name
    this.#initialName = name
    this.#isComputer = isComputer
  }

  get name(): string {
    return this.#name
  }

  get isComputer(): boolean {
    return this.#isComputer
  }

  get wins(): number {
    return this.#wins
  }

  set name(name: string) {
    this.#name = name
  }

  set isComputer(b: boolean) {
    this.#isComputer = b
  }

  set wins(amount: number) {
    this.#wins = amount
  }

  resetName(): void {
    this.#name = this.#initialName
  }
}