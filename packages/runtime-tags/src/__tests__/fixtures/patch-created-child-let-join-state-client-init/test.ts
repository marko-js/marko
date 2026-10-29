import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};
const set = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
};

// patch-created-child-let-join-state where the page's state gives the `<let>` its
// value: the client renders the hole, so the patch names the join's init.
export const config: TestConfig = {
  patches: true,
  steps: [{}, inc, { show: true }, set, inc, { show: true }],
};
