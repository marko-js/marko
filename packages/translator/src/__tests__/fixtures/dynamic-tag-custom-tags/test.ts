export const steps = [{}, click, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
