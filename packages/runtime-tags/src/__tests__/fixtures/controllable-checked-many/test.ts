export const steps = [{}, click0, click1, click1];

function click0(container: Element) {
  container.querySelectorAll("input").item(0).click();
}

function click1(container: Element) {
  container.querySelectorAll("input").item(1).click();
}
