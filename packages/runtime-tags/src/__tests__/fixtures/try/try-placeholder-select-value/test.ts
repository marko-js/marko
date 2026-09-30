import type { TestConfig } from "../../../main.test";
import { flush } from "../../../utils/resolve";

export const config: TestConfig = {
  // Diverges until this agent-feedback item is fixed:
  // 2026-09-30-apply-a-select-value-to-options-inserted-after-it-renders.md
  skip_settled: true,
  steps: [{}, flush],
  equivalent: false,
};
