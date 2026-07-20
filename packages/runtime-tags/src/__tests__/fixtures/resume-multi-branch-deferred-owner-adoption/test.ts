import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, show, clear],
};

function show(document: Document) {
  document.querySelector<HTMLButtonElement>("button#show")!.click();
}

function clear(document: Document) {
  document.querySelector<HTMLButtonElement>("button#clear")!.click();
}
