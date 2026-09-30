import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// `msg` is never allow-listed, so the client recompute reads `undefined`. The
// `<p>` renders once and is not reactive, so it must not report.
export const config: TestConfig = {
  skip_optimize: true,
  equivalent: false,
  steps: [{ $global: { msg: "hello" } }, click("button")],
};
