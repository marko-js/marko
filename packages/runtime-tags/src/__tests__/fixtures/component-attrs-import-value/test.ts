export const steps = [{}, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const skip_csr = true;
export const error_runtime = true;
