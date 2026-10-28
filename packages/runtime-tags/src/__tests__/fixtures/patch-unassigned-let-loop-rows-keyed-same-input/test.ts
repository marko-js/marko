import type { TestConfig } from "../../main.test";

// An unassigned `<let>` read in keyed rows a patch adds, its input unchanged: a fresh
// render shows the client's value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", items: [1] },
    { v: "a", items: [1, 2] },
  ],
};
