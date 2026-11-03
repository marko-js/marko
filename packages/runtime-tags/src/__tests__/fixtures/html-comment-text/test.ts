import type { TestConfig } from "../../main.test";

// The plain twin of patch-html-comment-text.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ title: "a" }, { title: "b" }],
};
