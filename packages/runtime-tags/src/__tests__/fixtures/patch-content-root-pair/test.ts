import type { TestConfig } from "../../main.test";

// An unchanged fed renderer stays paired: its entry re-applies the same
// renderer key and the rendered branch is untouched.
export const config: TestConfig = {
  patches: true,
  steps: [{ content: "div" }, { content: "div" }],
};
