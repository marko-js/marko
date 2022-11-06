const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const steps = [{}, click] as const;
