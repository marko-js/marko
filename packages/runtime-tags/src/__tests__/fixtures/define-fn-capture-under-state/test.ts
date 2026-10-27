import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};

// patch-define-fn-capture-under-state without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { a: "A", x: true },
    { a: "B", x: true },
    toggle,
    { a: "C", x: true },
    toggle,
  ],
};
