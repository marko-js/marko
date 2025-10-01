const click = (container: Element) => {
  container.querySelector<HTMLButtonElement>("button")!.click();
};

export const steps = [{ message: "hello" }, click, click];
