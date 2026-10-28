import type { TestConfig } from "../../main.test";

// Two sibling loops, one reading input only in a handler.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", items: [1], items2: [1, 2] },
    { title: "b", items: [1], items2: [1] },
  ],
};
