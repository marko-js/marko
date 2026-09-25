import type { TestConfig } from "../../main.test";

// A spread copies the members it passes: the child shows a written member
// only once the object is reassigned.
export const config: TestConfig = {
  steps: [{}, open, read, apply],
};

function open(document: Document) {
  document.querySelector<HTMLButtonElement>(".open")!.click();
}

function read(document: Document) {
  document.querySelector<HTMLButtonElement>(".read")!.click();
}

function apply(document: Document) {
  document.querySelector<HTMLButtonElement>(".apply")!.click();
}
