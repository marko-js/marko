import type { TestConfig } from "../../main.test";

const click = (document: Document) => document.querySelector("button")!.click();

// Plain twin of patch-content-attr-effect-once: content a `content=` renders runs
// its effect once, and the scope rendering it reads that content's final DOM.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ label: "a" }, click, { label: "b" }],
};
