import type { TestConfig } from "../../main.test";

// A server-driven `<show>` hides on a patch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "one", on: true },
    { label: "two", on: false },
  ],
};
