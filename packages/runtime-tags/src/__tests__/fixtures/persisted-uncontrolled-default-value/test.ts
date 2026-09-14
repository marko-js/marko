import type { TestConfig } from "../../main.test";

// Uncontrolled defaults (no change handler): a patch updates the default
// the way a client render does and leaves the live value alone.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  compare_defaults: true,
  steps: [
    { name: "a", on: true },
    { name: "b", on: false },
    { name: "c", on: true },
  ],
};
