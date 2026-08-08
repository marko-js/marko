import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child rendering another custom tag admits when the whole tree is a
// self-contained client instance.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, toggle, {}],
};
