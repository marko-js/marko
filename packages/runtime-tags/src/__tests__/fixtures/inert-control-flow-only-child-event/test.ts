export const steps = [{}, click, click];

function click(container: Element) {
  container.querySelector<HTMLDivElement>("#target")!.click();
}
