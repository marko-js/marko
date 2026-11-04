import type { TestConfig } from "../../main.test";

// A `<define>` body called in place, its param read in a loop under a
// param-selected branch: the server renders it all.
export const config: TestConfig = {
  patches: true,
  steps: [
    { open: true, label: "a" },
    { open: true, label: "b" },
    { open: false, label: "c" },
    { open: true, label: "d" },
  ],
};
