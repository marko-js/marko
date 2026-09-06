import type { TestConfig } from "../../main.test";
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A page with no client work of its own reads an interactive child's
// return: the tag variable still registers.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}],
};
