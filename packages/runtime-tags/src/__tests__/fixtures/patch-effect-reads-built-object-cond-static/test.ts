import type { TestConfig } from "../../main.test";

// An object built under a condition, else a static one: its script depends on its
// sources, not on the object a patch writes anew.
export const config: TestConfig = {
  patches: true,
  steps: [
    { flag: true, title: "a" },
    { flag: true, title: "b" },
    { flag: true, title: "b" },
  ],
};
