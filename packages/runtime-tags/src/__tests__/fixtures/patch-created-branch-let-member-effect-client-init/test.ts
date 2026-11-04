import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

// An effect reading a `<let>` member runs once in a branch a patch creates in a live
// child, where the page's state, through the child's input, gives the `<let>` its value.
export const config: TestConfig = {
  patches: true,
  steps: [{}, inc, { show: true }, inc, { show: true }],
};
