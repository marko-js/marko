export const steps = [{}, add, remove, remove, add];

function add(container: Element) {
  (container.querySelector("#add") as HTMLButtonElement).click();
}

function remove(container: Element) {
  (container.querySelector("#remove") as HTMLButtonElement).click();
}
