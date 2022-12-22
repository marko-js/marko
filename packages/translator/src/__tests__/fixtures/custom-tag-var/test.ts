const increment = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.inc")!.click();
};

export const steps = [{}, increment, increment, increment];
