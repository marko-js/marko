import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Structure nested in stateful structure is stateful: the inner list needs
// no client state of its own to render inside the stateful outer.
export const config: TestConfig = {
  patches: true,
  steps: [{}, click, {}],
};
