export const steps = [{}, toggle, toggle, toggle];

function toggle(container: Element) {
  const details = container.querySelector<HTMLDetailsElement>("details")!;
  details.open = !details.open;
}
