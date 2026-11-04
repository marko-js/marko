import type { TestConfig } from "../../main.test";
// A script reading an object a condition `&&` builds re-runs as the object's slot
// changes.
export const config: TestConfig = {
  patches: true,
  same_input_divergence:
    "A server-built object read whole re-runs its effect when written, as a document load would.",
  steps: [
    { flag: true, title: "a" },
    { flag: true, title: "b" },
    { flag: true, title: "b" },
  ],
};
