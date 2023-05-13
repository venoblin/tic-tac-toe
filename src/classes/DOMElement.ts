export default class DOMElement<T> {

  static create(tag: string, classNames?: string[]): HTMLElement {
    const elem = document.createElement(tag)
    if(classNames) {
      classNames.forEach((cl) => {
        elem.classList.add(cl)
      })
    }

    return elem
  }
}