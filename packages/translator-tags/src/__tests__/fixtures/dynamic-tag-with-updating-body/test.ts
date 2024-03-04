export const steps = [{}, count, changeTag, count];

function count(container: Element) {
  container.querySelector<HTMLButtonElement>("#count")!.click();
}

function changeTag(container: Element) {
  container.querySelector<HTMLButtonElement>("#changeTag")!.click();
}
