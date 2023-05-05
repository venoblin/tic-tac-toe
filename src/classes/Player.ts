import { Icon, IconObject } from "../types"

export default class Player {
  #name: string
  #initialName: string // used to remember name given when first instantiated 
  #isComputer: boolean
  #wins: number = 0
  #icons: IconObject = {
    x: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>',
    o: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160zM0 256C0 132.3 100.3 32 224 32s224 100.3 224 224s-100.3 224-224 224S0 379.7 0 256z"/></svg>'
  }
  #selectedIcon: Icon

  constructor(name: string, icon: Icon, isComputer?: boolean) {
    this.#name = name
    this.#initialName = name
    this.#selectedIcon = icon
    this.#isComputer = isComputer || false
  }

  get name(): string {
    return this.#name
  }

  get initialName(): string {
    return this.#initialName
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

  getIcon(): string {
    return this.#icons[this.#selectedIcon]
  }

  resetName(): void {
    this.#name = this.#initialName
  }
}