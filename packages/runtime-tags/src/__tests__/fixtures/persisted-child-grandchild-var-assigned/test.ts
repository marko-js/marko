import type { TestConfig } from "../../main.test";

const bump = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.bump")!.click();
};
const reset = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.reset")!.click();
};
const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// A nested child's assigned tag variable inside client-owned structure is
// plain client behavior.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, bump, reset, toggle, toggle, bump, {}],
};
