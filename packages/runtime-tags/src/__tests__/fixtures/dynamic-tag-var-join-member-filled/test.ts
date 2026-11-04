import type { TestConfig } from "../../main.test";

// patch-dynamic-tag-var-join-member-filled without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { which: true, id: "a" },
    { which: true, id: "b" },
    { which: false, id: "c" },
    { which: true, id: "d" },
  ],
};
