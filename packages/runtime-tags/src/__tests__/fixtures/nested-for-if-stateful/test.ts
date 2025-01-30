export const steps = [{}, click, click, click, click, click, click, click, click, click];

let buttonIndex = 0;

function click(container: Element) {
  container.querySelectorAll("button")[buttonIndex].click();
  buttonIndex = (buttonIndex + 1) % 3;
}
