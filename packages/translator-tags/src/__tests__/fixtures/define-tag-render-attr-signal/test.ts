export const steps = [{}, click, click, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const skip_resume = true;