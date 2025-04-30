export const skip_csr = true;
export const skip_resume = false;

export const steps = [{}, click, click];

function click(container: HTMLElement) {
  container.querySelector("button")?.click();
}
