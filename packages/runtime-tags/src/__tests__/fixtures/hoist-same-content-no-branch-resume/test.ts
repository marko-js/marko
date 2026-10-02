import type { TestConfig } from "../../main.test";

// A value read before its declaration in the same content resumes nothing
// around that content.
export const config: TestConfig = {
  steps: [{ show: true, inner: true, label: "a" }],
};
