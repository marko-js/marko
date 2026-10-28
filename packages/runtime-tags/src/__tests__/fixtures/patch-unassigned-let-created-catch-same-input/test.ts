import type { TestConfig } from "../../main.test";

// An unassigned `<let>` read in a `@catch` a patch shows, its input unchanged: a fresh
// render shows the client's value.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "a" },
  ],
};
