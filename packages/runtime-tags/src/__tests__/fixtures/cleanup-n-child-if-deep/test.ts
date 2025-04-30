export const steps = [
  {},
  clickInner,
  clickMiddle,
  clickOuter,
  clickInner,
  clickMiddle,
  clickOuter,
  clickOuter,
];

function clickOuter(container: Element) {
  container.querySelector<HTMLButtonElement>("button#outer")!.click();
}

function clickMiddle(container: Element) {
  container.querySelector<HTMLButtonElement>("button#middle")!.click();
}

function clickInner(container: Element) {
  container.querySelector<HTMLButtonElement>("button#inner")!.click();
}
