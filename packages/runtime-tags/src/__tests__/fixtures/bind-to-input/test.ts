const clickControlled = (container: Element) => {
  container.querySelector<HTMLButtonElement>("#controlled")!.click();
};

const clickUncontrolled = (container: Element) => {
  container.querySelector<HTMLButtonElement>("#uncontrolled")!.click();
};

export const steps = [
  {},
  clickControlled,
  clickUncontrolled,
  clickControlled,
  clickUncontrolled,
  clickControlled,
  clickUncontrolled,
] as const;
