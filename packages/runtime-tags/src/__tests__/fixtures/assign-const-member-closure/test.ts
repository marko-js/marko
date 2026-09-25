import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, open, keydown, read],
};

function open(document: Document) {
  document.querySelector<HTMLButtonElement>(".open")!.click();
}

function keydown(document: Document) {
  document.dispatchEvent(new document.defaultView!.KeyboardEvent("keydown"));
}

function read(document: Document) {
  document.querySelector<HTMLButtonElement>(".read")!.click();
}
