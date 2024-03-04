export const skip_ssr = true;

export const steps = [{}, increment, toggle, increment, toggle];

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#increment")?.click();
}
function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")?.click();
}
