import type { TestConfig } from "../../main.test";

// A `<define>` calling itself through an `<await>` body (no branch that stops) compiles,
// though it never renders: its kept content is created wherever a call to it is.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", next: 0 },
    { show: false, label: "b", next: 0 },
  ],
};
