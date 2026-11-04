import type { TestConfig } from "../../main.test";

// A created child's `<let>` renders one array element: the function in the
// element beside it, by its index, stays unregistered.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
