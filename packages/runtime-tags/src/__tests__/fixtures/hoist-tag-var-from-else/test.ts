import type { TestConfig } from "../../main.test";

function read(document: Document) {
  document.querySelector<HTMLButtonElement>(".read")!.click();
}

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
}

export const config: TestConfig = {
  steps: [{}, read, toggle, read],
};
