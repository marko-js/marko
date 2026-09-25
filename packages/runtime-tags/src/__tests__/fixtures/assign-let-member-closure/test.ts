import type { TestConfig } from "../../main.test";

// The template shows a written member only once the object is reassigned.
export const config: TestConfig = {
  steps: [{}, open, keydown, apply, keydown],
};

function open(document: Document) {
  document.querySelector<HTMLButtonElement>(".open")!.click();
}

function keydown(document: Document) {
  document.dispatchEvent(new document.defaultView!.KeyboardEvent("keydown"));
}

function apply(document: Document) {
  document.querySelector<HTMLButtonElement>(".apply")!.click();
}
