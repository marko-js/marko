import type { TestConfig } from "../../main.test";

// A `<define>` rendering its body inside a branch its param selects, the
// call site feeding it from input: the patch constructs and pairs it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, note: "x" },
    { show: true, note: "y" },
    { show: true, note: "z" },
    { show: false, note: "w" },
    { show: true, note: "v" },
  ],
};
