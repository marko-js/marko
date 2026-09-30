import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  // Diverges until this agent-feedback item is fixed:
  // 2026-09-30-do-not-report-an-untouched-select-s-default-pick-on-resume.md
  skip_settled: true,
  equivalent: false,
  steps: [{}, click("button")],
};
