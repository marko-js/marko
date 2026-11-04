import type { TestConfig } from "../../main.test";

// Content a child keeps renders before an `<await>` and again inside it: the later
// instance joins its owner's set after the document sent it, and a patch reaches both.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }],
};
