export const steps = [{ show: true }, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
