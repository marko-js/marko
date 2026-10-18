import type { TestConfig } from "../../main.test";

// A body under an `<await>` whose value is no promise renders before its tag's
// fills are decided: a native tag's body ships no fill.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: false, note: "a", v: "x" },
    { on: false, note: "b", v: "y" },
    { on: false, note: "c", v: "z" },
  ],
};
