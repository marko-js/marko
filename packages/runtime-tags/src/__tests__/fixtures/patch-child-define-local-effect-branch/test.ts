import type { TestConfig } from "../../main.test";

// An effect in an `<if>` inside a child's `<define>` body reads a local the body
// derives from the child's input: a patch creating the branch fills the local.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
  ],
};
