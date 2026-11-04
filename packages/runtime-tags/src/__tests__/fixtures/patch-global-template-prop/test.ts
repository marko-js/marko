import type { TestConfig } from "../../main.test";

// A template passed as a prop reads `$global`.
export const config: TestConfig = {
  patches: true,
  steps: [{ $global: { user: "a" } }, { $global: { user: "b" } }],
};
