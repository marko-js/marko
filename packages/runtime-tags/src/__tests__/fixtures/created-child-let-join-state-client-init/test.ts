import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};
const set = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.set")!.click();
};

// patch-created-child-let-join-state-client-init without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, inc, { show: true }, set, inc, { show: true }],
};
