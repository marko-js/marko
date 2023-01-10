const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const steps = [{}, click] as const;
export const skip_ssr = true;
export const skip_hydrate = true;
