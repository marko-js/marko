import type { TestConfig } from "../../main.test";

const reset = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.reset")!.click();
};
const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// A destructured tag variable with a change handler inside client-owned
// structure writes back client-side.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, reset, toggle, toggle, {}],
};
