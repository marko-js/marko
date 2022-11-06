const increment = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.inc")!.click();
};
const toggle = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

export const steps = [{}, increment, toggle, increment, toggle, increment];
