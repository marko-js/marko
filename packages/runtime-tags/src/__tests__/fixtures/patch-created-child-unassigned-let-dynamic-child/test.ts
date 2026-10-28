import type { TestConfig } from "../../main.test";

// A created child's never-assigned `<let>` passes its content to the child a
// never-assigned `<let>` names as a dynamic tag, which renders it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
  ],
};
