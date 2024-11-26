const increment = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.inc")!.click();
};

const reset = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button.reset")!.click();
};


export const steps = [{}, increment, increment, reset, increment];
