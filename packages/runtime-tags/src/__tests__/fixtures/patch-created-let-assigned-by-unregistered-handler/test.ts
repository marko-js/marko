import type { TestConfig } from "../../main.test";

// A `<let>` in a branch a patch creates, read with changing input, whose only
// assignment is in a handler no client code registers: its fill registers itself.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "b", w: "2" },
    { show: true, v: "b", w: "3" },
  ],
};
