import type { TestConfig } from "../../../main.test";

export const config: TestConfig = {
  // Diverges until this agent-feedback item is fixed:
  // 2026-09-30-run-a-branch-s-effects-in-the-same-order-on-mount-and-resume.md
  skip_settled: true,
  equivalent: false,
  steps: [{ show: true }],
};
