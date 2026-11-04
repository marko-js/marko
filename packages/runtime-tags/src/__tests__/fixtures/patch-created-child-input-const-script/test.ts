import type { TestConfig } from "../../main.test";

// A created child's `<const>` over its input a script reads arrives with it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
