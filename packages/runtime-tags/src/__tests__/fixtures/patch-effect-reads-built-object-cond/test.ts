import type { TestConfig } from "../../main.test";
// A script reading an object one of two literals builds re-runs once what it is
// built from changes, not on every patch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { flag: true, title: "a" },
    { flag: true, title: "b" },
    { flag: true, title: "b" },
  ],
};
