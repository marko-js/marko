import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// POLICY PIN: an opaque contribution to an otherwise pure-state test
// still classifies client-owned — the client re-evaluates the whole
// test on state changes, exactly like a non-persisted stateful chain.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click],
};
