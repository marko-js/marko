import type { TestConfig } from "../../main.test";

// A constant loop's items each hold an effect reading an input, which a patch
// re-runs by the effect's entry.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, note: "a" },
    { show: true, note: "b" },
    { show: true, note: "c" },
    { show: false, note: "d" },
    { show: true, note: "e" },
  ],
};
