export const steps = [{}, increment];

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#increment")?.click();
}
