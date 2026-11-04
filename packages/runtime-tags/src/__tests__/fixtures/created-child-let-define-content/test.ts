import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-created-child-let-define-content without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    clear,
    { show: true, label: "d" },
  ],
};
