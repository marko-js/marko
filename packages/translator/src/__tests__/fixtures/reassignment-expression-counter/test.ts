export const steps = [{}, addTwo, triple, cube];

function addTwo(container: Element) {
  container.querySelector<HTMLButtonElement>("#addTwo")!.click();
}

function triple(container: Element) {
  container.querySelector<HTMLButtonElement>("#triple")!.click();
}

function cube(container: Element) {
  container.querySelector<HTMLButtonElement>("#cube")!.click();
}
