import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// POLICY PIN: an inert contribution to an otherwise pure-state test
// still classifies client-owned, like a non-persisted stateful chain.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click],
};
