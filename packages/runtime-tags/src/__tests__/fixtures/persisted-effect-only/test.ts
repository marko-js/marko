import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A frame with no value fills at all (only the effect run) must still name
// the root and apply, preserving the delegated handler and client state.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click],
};
