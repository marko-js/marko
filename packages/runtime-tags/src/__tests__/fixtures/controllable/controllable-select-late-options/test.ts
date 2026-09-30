import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";

export const config: TestConfig = {
  // Diverges until this agent-feedback item is fixed:
  // 2026-09-30-keep-a-controlled-select-value-when-its-options-render-later.md
  skip_settled: true,
  equivalent: false,
  // Debug logs the unmatched controlled `<select>` value diagnostic.
  skip_parity: true,
  steps: [{}, wait],
};
