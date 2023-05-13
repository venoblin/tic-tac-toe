export default class DOMElement<T> {
  #elem: HTMLElement

  constructor(tag: string, classNames?: string[]){
    this.#elem = document.createElement(tag)
    if(classNames) {
      classNames.forEach((cl) => {
        this.#elem.classList.add(cl)
      })
    }
  }

  create(): HTMLElement {
    return this.#elem
  }
}