export const steps = [{ a: 2 }, click, { a: 3 }, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
