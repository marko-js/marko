import type { TestConfig } from "../../main.test";

// patch-page-child-let-tag-rows without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", items: ["x"] },
    { label: "b", items: ["z", "x"] },
    { label: "c", items: ["x"] },
  ],
};
