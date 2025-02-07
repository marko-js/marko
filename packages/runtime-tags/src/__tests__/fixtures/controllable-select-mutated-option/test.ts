export const steps = [{}, clickRemove, clickRemove, clickRemove, clickAdd, clickAdd, clickAdd];

function clickAdd(container: Element) {
  container.querySelector<HTMLButtonElement>(".add")!.click();
}

function clickRemove(container: Element) {
  container.querySelector<HTMLButtonElement>(".remove")!.click();
}
