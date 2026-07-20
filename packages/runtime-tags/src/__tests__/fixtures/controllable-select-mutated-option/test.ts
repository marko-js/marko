import type { TestConfig } from "../../main.test";

function clickAdd(document: Document) {
  document.querySelector<HTMLButtonElement>(".add")!.click();
}

function clickRemove(document: Document) {
  document.querySelector<HTMLButtonElement>(".remove")!.click();
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
