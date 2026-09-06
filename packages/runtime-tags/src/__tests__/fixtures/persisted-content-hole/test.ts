import type { TestConfig } from "../../main.test";

// A hole inside a body fed to a content-consuming child at the root
// patch-writes through the consumer's branch link.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", note: "x" },
    { title: "b", note: "y" },
    { title: "b", note: "z" },
  ],
};
