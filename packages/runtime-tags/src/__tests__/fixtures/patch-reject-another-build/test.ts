import type { TestConfig } from "../../main.test";

// The server deployed another build since the document, and its patch reaches
// the page anyway (a cache ignoring `vary`): the page loads the document.
export const config: TestConfig = {
  patches: true,
  expect_rejection: true,
  patch_build: "b2",
  steps: [{ title: "one" }, { title: "two" }],
};
