import type { TestConfig } from "../../../main.test";

export const config: TestConfig = {
  // Wrapped until this agent-feedback item is fixed:
  // 2026-09-30-keep-a-nested-dynamic-style-s-values-on-the-client.md
  skip_wrapped: true,
  equivalent: false,
  steps: [{ color: "green" }, { color: "blue" }],
};
