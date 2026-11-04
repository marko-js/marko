import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-tag-define-passed-fn-deps without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ hint: "a" }, { hint: "b" }, click, { hint: "c" }],
};
