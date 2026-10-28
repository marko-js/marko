import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-define-fn-label-patch-fill without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, click, { label: "b" }, click, { label: "c" }],
};
