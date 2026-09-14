import type { TestConfig } from "../../main.test";

// A dynamic body fed to a content-consuming child, paired: the unchanged
// (unregistered) renderer ships its key and the body's hole patch-writes
// through the tag's branch link.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, title: "a", note: "x" },
    { show: true, title: "b", note: "y" },
  ],
};
