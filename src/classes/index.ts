export class Screen {
  layout: HTMLElement

  constructor(anchor: string) {
    const anchorElem = document.getElementById(anchor)
    
    this.layout = document.createElement('div')
    this.layout.classList.add('layout')

    anchorElem?.append(this.layout)
  }
}

export class Player {
  name: string

  constructor(name: string) {
    this.name = name
  }
}