const click = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button")!.click();
};

export const steps = [{ show: true }, click, click];
