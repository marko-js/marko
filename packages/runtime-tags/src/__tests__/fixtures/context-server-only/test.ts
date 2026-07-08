import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ $global: { theme: "light" } }],
  // Zero-bundle, made executable: no provide-value sentinel and no context
  // runtime helper may reach the client output.
  bundle_excludes: { dom: ["context_value_sentinel", "_context"] },
};
