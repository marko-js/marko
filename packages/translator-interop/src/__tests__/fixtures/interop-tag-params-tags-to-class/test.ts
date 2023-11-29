export const steps = [
  {},
  clickTags,
  clickClass,
  clickTags,
  clickClass,
  clickTags,
];

function clickClass(container: Element) {
  (container.querySelector("#class") as HTMLButtonElement).click();
}

function clickTags(container: Element) {
  (container.querySelector("#tags") as HTMLButtonElement).click();
}

export const skip_resume = true;
