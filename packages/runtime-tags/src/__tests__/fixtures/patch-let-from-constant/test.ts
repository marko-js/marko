import type { TestConfig } from "../../main.test";

// A `<let>` from a constant: nothing a patch changes seeds it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", w: "1" },
    { v: "b", w: "2" },
  ],
};
