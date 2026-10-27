import type { TestConfig } from "../../main.test";

// A created child holds its whole input in a `<let>` and calls a function from
// an attribute: it registers under that attribute's name.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
