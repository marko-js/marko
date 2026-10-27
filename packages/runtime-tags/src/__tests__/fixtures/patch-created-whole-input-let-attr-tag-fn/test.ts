import type { TestConfig } from "../../main.test";

// A function in an attribute tag a created child holds through its whole input
// in a `<let>` registers under the attribute tag's and attribute's names.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
