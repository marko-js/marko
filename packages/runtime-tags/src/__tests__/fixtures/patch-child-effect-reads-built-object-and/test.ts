import type { TestConfig } from "../../main.test";

// A child's script reading an object its call builds behind `&&` depends on the
// object's sources.
export const config: TestConfig = {
  patches: true,
  steps: [
    { flag: true, title: "a" },
    { flag: true, title: "b" },
    { flag: true, title: "b" },
  ],
};
