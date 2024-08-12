export const steps = [{}, click, click, click];

function click(container: Element) {
  container.querySelectorAll("button")!.forEach((item) => item.click());
}

export const skip_resume = true;