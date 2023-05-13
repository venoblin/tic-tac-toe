export default class DOMElement {
  #elem: Element

  constructor(tag: string, classNames: string[]){
    this.#elem = document.createElement(tag)
    if(classNames.length) {
      classNames.forEach((cl) => {
        this.#elem.classList.add(cl)
      })
    }
  }

  create(): Element {
    return this.#elem
  }
}