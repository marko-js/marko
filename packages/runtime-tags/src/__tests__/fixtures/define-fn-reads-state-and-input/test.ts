import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-define-fn-reads-state-and-input without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: "x", label: "a" },
    click,
    { x: "y", label: "b" },
    click,
    { x: "z", label: "c" },
  ],
};
