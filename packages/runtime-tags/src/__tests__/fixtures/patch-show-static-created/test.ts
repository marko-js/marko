import type { TestConfig } from "../../main.test";

// A statically hidden `<show>` in a branch a patch creates stays hidden, and
// only a created scope carries the entry that hides it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
  ],
};
