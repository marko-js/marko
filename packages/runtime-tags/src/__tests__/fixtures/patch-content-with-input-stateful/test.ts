import type { TestConfig } from "../../main.test";

// A body a child renders with input in its stateful branch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { open: true, note: "a" },
    { open: true, note: "b" },
  ],
};
