import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-state-branch-reads-built-object without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ x: "a" }, { x: "b" }, click, click, { x: "c" }],
};
