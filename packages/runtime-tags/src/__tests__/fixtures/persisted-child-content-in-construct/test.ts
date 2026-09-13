import type { TestConfig } from "../../main.test";

// A child analyzed on its own holds content its grandchild renders in place;
// a parent may still construct the child inside a branch, so the content
// keeps its record for that shell.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: true, note: "a" },
    { show: false, note: "b" },
    { show: true, note: "c" },
  ],
};
