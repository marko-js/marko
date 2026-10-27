import type { TestConfig } from "../../main.test";

// A branch local a script reads keeps the branch creatable on a stateful page.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, title: "a" },
    { show: true, title: "b" },
    { show: true, title: "c" },
  ],
};
