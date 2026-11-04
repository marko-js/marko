import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-capture-branch-kept without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { on: true, show: true },
    { on: true, show: false },
    click,
    { on: true, show: true },
    click,
  ],
};
