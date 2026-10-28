import type { TestConfig } from "../../main.test";

// The plain twin of `patch-try-document-catch-then-patch`: the document main
// renders.
export const config: TestConfig = {
  steps: [{ message: "x", boom: true }],
};
