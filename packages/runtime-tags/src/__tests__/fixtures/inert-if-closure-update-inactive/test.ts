export const steps = [{ show: false }, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
