export const steps = [{}, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const skip_ssr = true;
