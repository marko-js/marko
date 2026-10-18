import type { TestConfig } from "../../main.test";

// A function under a computed key stays anywhere only under its attribute: a
// created child rendering another attribute leaves it unregistered.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
