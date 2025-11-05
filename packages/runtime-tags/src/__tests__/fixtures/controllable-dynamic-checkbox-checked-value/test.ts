export const steps = [{}, clickB, toggleB, toggleB, clickA];

function clickA(container: Element) {
  container.querySelector<HTMLInputElement>(`input[value=a]`)!.click();
}
function clickB(container: Element) {
  container.querySelector<HTMLInputElement>(`input[value=b]`)!.click();
}
function toggleB(container: Element) {
  container.querySelector("button")!.click();
}
