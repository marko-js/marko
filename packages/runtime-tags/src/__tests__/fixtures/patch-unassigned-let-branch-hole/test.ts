import type { TestConfig } from "../../main.test";

// A branch an unassigned `<let>` selects fills its hole from changing input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", w: "1" },
    { v: "a", w: "2" },
  ],
};
