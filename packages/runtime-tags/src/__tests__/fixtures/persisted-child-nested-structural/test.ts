import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A nested structural param fed from an attribute tag reading an import
// selects client-side.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}, click, click],
};
