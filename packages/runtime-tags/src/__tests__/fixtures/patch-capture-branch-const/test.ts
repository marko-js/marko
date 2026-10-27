import type { TestConfig } from "../../main.test";

// A branch's `<const>` a function passed to a child captures.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, v: "a" },
    { show: true, v: "b" },
    { show: true, v: "b" },
  ],
};
