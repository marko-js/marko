import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

// An effect reading a `<let>` member runs once in a `<define>` body a patch creates
// where the page's state, through the branch's init, gives the `<let>` its value.
export const config: TestConfig = {
  patches: true,
  steps: [{}, inc, { show: true }, inc, { show: true }],
};
