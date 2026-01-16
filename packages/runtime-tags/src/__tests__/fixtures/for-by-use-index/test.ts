export const steps = [{}, click];

function click(container: Element) {
  (container.querySelector("button") as HTMLButtonElement).click();
}
