import type { TestConfig } from "../../main.test";

// A created child passes on the object its grandchild's `<let>` seeds only
// `{ label }` of: the function in it needs no registration.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
