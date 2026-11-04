import type { TestConfig } from "../../main.test";

// A function under a computed key in an attribute of a created child holding
// its whole input in a `<let>` registers: anywhere under that attribute.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
