import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server value selects structure nested in client-owned structure: it
// delivers as a fill and the inner branch re-selects client-side.
export const config: TestConfig = {
  persisted: true,
  steps: [{ show: true }, click, click, { show: false }, { show: true }],
};
