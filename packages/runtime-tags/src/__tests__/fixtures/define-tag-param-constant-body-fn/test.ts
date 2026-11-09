import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A function in a `<define>` body that only a branch on a constant param reads
// is never sent, so it needs no registration.
export const config: TestConfig = {
  steps: [{}, click],
};
