import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A function read only in a `<define>` branch on a param every call passes as a
// constant: no client code reads it, so the page ships nothing for it.
export const config: TestConfig = {
  patches: true,
  steps: [{}, click, {}, click],
};
