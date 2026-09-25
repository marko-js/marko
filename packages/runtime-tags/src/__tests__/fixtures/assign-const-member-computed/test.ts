import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, write, read],
};

function write(document: Document) {
  document.querySelector<HTMLButtonElement>(".write")!.click();
}

function read(document: Document) {
  document.querySelector<HTMLButtonElement>(".read")!.click();
}
