import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, open, read],
};

function open(document: Document) {
  document.querySelector<HTMLButtonElement>(".open")!.click();
}

function read(document: Document) {
  document.querySelector<HTMLButtonElement>(".read")!.click();
}
