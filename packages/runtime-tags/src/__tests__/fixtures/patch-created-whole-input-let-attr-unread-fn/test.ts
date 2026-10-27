import type { TestConfig } from "../../main.test";

// A created child holds its whole input in a `<let>` and renders one member of
// an attribute: the function beside it stays unregistered.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
