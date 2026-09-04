import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An imported ARGUMENT gating a child's structure selects client-side, like
// the named-attribute form.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}, click, click],
};
