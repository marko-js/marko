import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-define-nested-fn-reads-state-and-input without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { step: 1, label: "a" },
    click,
    { step: 2, label: "b" },
    click,
    { step: 3, label: "c" },
    click,
  ],
};
