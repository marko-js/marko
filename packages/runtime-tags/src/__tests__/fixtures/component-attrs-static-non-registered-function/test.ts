export const steps = [{}, click];

function click(container: Element) {
  container.querySelectorAll("button")!.forEach((button) => button.click());
}
