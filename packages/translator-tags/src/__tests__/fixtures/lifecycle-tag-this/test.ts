export const steps = [{}, increment, increment];

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#increment")?.click();
}
