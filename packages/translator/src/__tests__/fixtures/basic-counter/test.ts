export const skip_html = true;
export const steps = [{}, click, click, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
