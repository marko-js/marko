import type { TestConfig } from "../../main.test";

function swap(document: Document) {
  (document.querySelector("#swap") as HTMLButtonElement).click();
}

function read(document: Document) {
  (document.querySelector("#read") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, read, swap, read],
};
