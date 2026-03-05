import type { TestConfig } from "../../main.test";

function clickAdd(container: Element) {
  container.querySelector<HTMLButtonElement>(".add")!.click();
}

function clickRemove(container: Element) {
  container.querySelector<HTMLButtonElement>(".remove")!.click();
}

export const config: TestConfig = {
  steps: [
    {},
    clickRemove,
    clickRemove,
    clickRemove,
    clickAdd,
    clickAdd,
    clickAdd,
  ],
};
