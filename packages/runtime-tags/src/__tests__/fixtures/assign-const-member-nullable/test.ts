import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ show: true }, open, read],
};

function open(document: Document) {
  document.querySelector<HTMLButtonElement>(".open")!.click();
}

function read(document: Document) {
  document.querySelector<HTMLButtonElement>(".read")!.click();
}
