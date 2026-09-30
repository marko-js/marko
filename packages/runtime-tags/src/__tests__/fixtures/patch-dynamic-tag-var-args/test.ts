import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server-owned dynamic tag with arguments and a tag variable.
export const config: TestConfig = {
  patches: true,
  csr_divergence:
    "Re-applying a paired dynamic tag's args resets the child's `<let>` that a client render keeps.",
  steps: [
    { on: true, start: 1 },
    click,
    { on: true, start: 5 },
    { on: false, start: 5 },
    { on: true, start: 7 },
  ],
};
