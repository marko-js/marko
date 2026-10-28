import type { TestConfig } from "../../main.test";

// An `<id>` in a branch a function passed to a child captures.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, v: "a" },
    { show: true, v: "b" },
    { show: true, v: "b" },
  ],
};
