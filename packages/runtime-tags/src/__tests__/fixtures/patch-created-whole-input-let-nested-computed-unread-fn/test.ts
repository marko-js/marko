import type { TestConfig } from "../../main.test";

// A function under a computed key below `a` stays anywhere only under `a`: a
// created child rendering a sibling of `a` leaves it unregistered.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
