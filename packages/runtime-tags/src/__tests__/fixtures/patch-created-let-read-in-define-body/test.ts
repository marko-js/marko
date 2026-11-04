import type { TestConfig } from "../../main.test";

// A `<let>` in a branch a patch creates, read only by a `<define>` body the branch
// calls: the body is created with it, so the patch writes the body's hole.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "a" },
    { show: false, v: "a" },
    { show: true, v: "a" },
  ],
};
