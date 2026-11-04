import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A `<define>` body's value from a param every call passes as a constant, read by
// a nested body: no patch changes it, so its readers join no set for it.
export const config: TestConfig = {
  patches: true,
  steps: [{}, click, {}, click],
};
