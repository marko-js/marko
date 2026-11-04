import type { TestConfig } from "../../main.test";

const click = (document: Document) => document.querySelector("button")!.click();

// Content a value's `content=` renders, mounted by a client render, runs its effect
// once, and the effect of the scope rendering it reads that content's final DOM.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }],
};
