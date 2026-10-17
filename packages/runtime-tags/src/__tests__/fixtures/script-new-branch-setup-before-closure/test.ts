import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A new branch's setup effects run before the effects its closures queue, as a
// template's setup effects run before its input's.
export const config: TestConfig = {
  steps: [{}, click, click],
};
