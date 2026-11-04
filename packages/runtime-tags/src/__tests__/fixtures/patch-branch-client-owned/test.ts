import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A pure-state test is stateful: flushes omit the entry, patches skip
// the body, and a branch the client reveals renders the latest fill.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }, click],
};
