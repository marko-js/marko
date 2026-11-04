import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};

// An effect reading a `<let>` member from an `<if>` runs once in a child a patch
// creates where the page's state gives the `<let>` its value; the `<let>` takes no fill.
export const config: TestConfig = {
  patches: true,
  steps: [{}, inc, { show: true }, inc, { show: true }],
};
