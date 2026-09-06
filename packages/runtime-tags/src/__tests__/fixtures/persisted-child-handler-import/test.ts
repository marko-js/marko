import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.outer")!.click();
};
const run = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.run")!.click();
};

// Handlers run against the live client scope, so imported helpers are
// fine there; only render-computed values must avoid module reads.
export const config: TestConfig = {
  persisted: true,
  steps: [{ label: "a" }, toggle, run, { label: "b" }, run],
};
