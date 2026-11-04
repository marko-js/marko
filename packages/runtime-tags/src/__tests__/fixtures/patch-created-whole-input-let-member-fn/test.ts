import type { TestConfig } from "../../main.test";

// A child reading its whole input passes it on to a created child whose
// `<let>` seeds only the function member: the function registers.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
