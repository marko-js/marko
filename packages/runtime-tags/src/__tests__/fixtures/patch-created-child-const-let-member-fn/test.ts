import type { TestConfig } from "../../main.test";

// A created child's `<let>` takes the object through a `<const>` and seeds
// only its function member: the function registers.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
