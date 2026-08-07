import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A local `by` keyer invokes client-side on every re-list: item pairing
// stays the client's across patches.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click],
};
