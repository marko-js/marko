import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function clickAdd(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

// Value order (["b","a"]) differs from document order (a,b); mutating options
// must not spuriously fire valueChange and reorder the model.
export const config: TestConfig = {
  steps: [{}, clickAdd, wait],
};
