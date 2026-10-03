import type { TestConfig } from "../../main.test";

function write(document: Document) {
  document.querySelector<HTMLButtonElement>(".write")!.click();
}

function read(document: Document) {
  document.querySelector<HTMLButtonElement>(".read")!.click();
}

export const config: TestConfig = {
  steps: [{}, read, write, read],
};
