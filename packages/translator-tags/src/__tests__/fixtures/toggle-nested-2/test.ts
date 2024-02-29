const clickOuter = (container: Element) => {
  container.querySelector<HTMLButtonElement>("#outer")!.click();
};
const clickInner = (container: Element) => {
  container.querySelector<HTMLButtonElement>("#inner")!.click();
};
const clickCount = (container: Element) => {
  container.querySelector<HTMLButtonElement>("#count")!.click();
};

export const steps = [
  {},
  clickCount,
  clickCount,
  clickInner,
  clickInner,
  clickCount,
  clickOuter,
  clickOuter,
  clickCount,
];
