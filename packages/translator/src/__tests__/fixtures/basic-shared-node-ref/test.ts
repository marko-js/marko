export const steps = [{}, toggle, toggle, reverse];

function toggle(container: Element) {
  (container.querySelector("#toggle") as HTMLButtonElement).click();
}

function reverse(container: Element) {
  (container.querySelector("#reverse") as HTMLButtonElement).click();
}
