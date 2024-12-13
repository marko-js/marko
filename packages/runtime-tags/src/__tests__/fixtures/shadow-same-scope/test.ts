export const steps = [{}, click, click, click, click, reset];

let buttonNum = 0;

function click(container: Element) {
  container.querySelectorAll("button")![buttonNum++].click();
}

function reset() {
  buttonNum = 0;
}