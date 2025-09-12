export const steps = [
  {},
  clickChange,
  clickUp,
  clickChange,
  clickChange,
  clickDown,
  clickChange,
  clickChange,
];

function clickUp(container: Element) {
  container.querySelector<HTMLButtonElement>(".up")!.click();
}

function clickDown(container: Element) {
  container.querySelector<HTMLButtonElement>(".down")!.click();
}

function clickChange(container: Element) {
  container.querySelector<HTMLButtonElement>(".change")!.click();
}
