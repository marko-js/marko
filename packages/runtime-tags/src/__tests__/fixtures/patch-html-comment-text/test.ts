import type { TestConfig } from "../../main.test";

// A comment is the page's only text-content hole: a patch rewrites its text, and
// the comment links the patcher.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }],
};
