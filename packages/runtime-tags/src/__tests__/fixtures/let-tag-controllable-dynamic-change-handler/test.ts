export const steps = [{}, increment, increment, toggle, increment, increment];

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")!.click();
}
