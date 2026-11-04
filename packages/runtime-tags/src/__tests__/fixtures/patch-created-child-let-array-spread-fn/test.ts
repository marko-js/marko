import type { TestConfig } from "../../main.test";

// A function after a spread in an array a created child's `<let>` holds has
// no index the analysis knows: it registers wherever the `<let>` renders.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", items: [] },
    { show: true, label: "b", items: [] },
  ],
};
