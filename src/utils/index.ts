export const removeAllChildren = (parentElem: HTMLElement, exeptionsArr: [] = []) => {
  // Exeptions array should be an array of classes from the elements
  // you wish not to remove, just add the string don't put a '.',
  // leave empty if you wish to remove everything
  const elemsToRemove = []

  for (let child of parentElem.children) {
    if (exeptionsArr.length) {
      for (let exeption of exeptionsArr) {
        if (!child.classList.contains(exeption)) elemsToRemove.push(child)
      }
    } else {
      elemsToRemove.push(child)
    }
  }

  for (let elem of elemsToRemove) {
    elem.remove()
  }
}