import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  // Wrapped until this agent-feedback item is fixed:
  // 2026-09-30-keep-a-nested-dynamic-style-s-values-on-the-client.md
  skip_wrapped: true,
  // Server and client style scope classes use different id prefixes.
  skip_settled: true,
  equivalent: false,
  steps: [{ color: "red" }, click("button")],
  // The css var name embeds the template id, which differs by mode.
  skip_parity: true,
};
