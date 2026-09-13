import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Nested structure inherits client ownership: the inner list needs no
// client state of its own to render inside the client-owned outer.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}],
};
