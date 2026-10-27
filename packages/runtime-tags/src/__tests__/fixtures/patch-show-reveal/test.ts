import type { TestConfig } from "../../main.test";

// A server-driven `<show>` reveals on a patch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "one", on: false },
    { label: "two", on: true },
  ],
};
