export const steps = [{}, clickA, clickB];

function clickA(container: Element) {
  container.querySelector<HTMLButtonElement>("button.a")!.click();
}

function clickB(container: Element) {
  container.querySelector<HTMLButtonElement>("button.b")!.click();
}
