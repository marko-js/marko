export const skip_resume = true;

export const steps = [{}, toggle, toggle];

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")?.click();
}
