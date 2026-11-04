import type { TestConfig } from "../../main.test";

// A body a child renders through a native spread in its stateful branch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { open: true, note: "a" },
    { open: true, note: "b" },
  ],
};
