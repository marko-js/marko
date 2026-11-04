import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-intersection-reads-built-object without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ x: "a" }, click, { x: "b" }, click, { x: "c" }],
};
