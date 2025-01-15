export const steps = [{}, click, click, click, click]

function click(container: Element) {
  container.querySelector("button")!.click();
}
