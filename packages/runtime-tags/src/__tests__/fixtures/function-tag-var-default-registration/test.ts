export const steps = [{}, click];
export const skip_ssr = true;
function click(container: Element) {
  container.querySelector("button")!.click();
}
