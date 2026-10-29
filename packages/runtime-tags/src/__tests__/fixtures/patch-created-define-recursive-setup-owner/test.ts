import type { TestConfig } from "../../main.test";

// A recursive `<define>` with state, created by a patch: each level's content
// renders with its own owner.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    { show: true, label: "d" },
  ],
};
