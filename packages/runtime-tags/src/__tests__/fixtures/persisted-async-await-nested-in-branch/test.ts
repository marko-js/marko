import type { TestConfig } from "../../main.test";

// Settling a constructed await initializes its body before a nested await's
// Child partial is walked.
export const config: TestConfig = {
  persisted: true,
  steps: () => [
    {
      show: false,
      outer: Promise.resolve("old outer"),
      inner: Promise.resolve("old inner"),
    },
    { show: true, outer: Promise.resolve("a"), inner: Promise.resolve("b") },
  ],
};
