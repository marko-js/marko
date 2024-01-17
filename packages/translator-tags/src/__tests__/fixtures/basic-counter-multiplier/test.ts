export const steps = [{}, count, count, multiplier];

function count(container: Element) {
  container.querySelector<HTMLButtonElement>("button#count")!.click();
}

function multiplier(container: Element) {
  container.querySelector<HTMLButtonElement>("button#multiplier")!.click();
}
