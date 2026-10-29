import type { TestConfig } from "../../main.test";

// The same child in a branch the patch creates, holding the content from its
// first render.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, more: true, label: "a" },
    { show: true, more: true, label: "b" },
    { show: true, more: true, label: "c" },
  ],
};
