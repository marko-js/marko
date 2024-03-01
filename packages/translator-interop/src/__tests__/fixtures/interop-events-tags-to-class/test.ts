export const steps = [
  {},
  clickClass,
  clickClass,
];

function clickClass(container: Element) {
  (container.querySelector("#class-api") as HTMLButtonElement).click();
}
