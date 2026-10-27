import type { TestConfig } from "../../main.test";

const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button")!.click();

// A created branch's `<let valueChange>` handler is bound to the branch's
// own scope: it ships owner-bound, applied eagerly.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, start: 5 },
    { show: true, start: 5 },
    click,
    { show: true, start: 7 },
    click,
  ],
};
