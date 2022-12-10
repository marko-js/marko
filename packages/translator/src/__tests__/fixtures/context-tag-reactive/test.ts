export const skip_hydrate = true;

export const steps = [{}, increment];

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#increment")?.click();
}
