import type { TestConfig } from "../../main.test";

// An attribute-tag body renders a template that reads `$global`.
export const config: TestConfig = {
  patches: true,
  steps: [{ $global: { user: "a" } }, { $global: { user: "b" } }],
};
