import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// `flag` is never allow-listed, so the resumed `<if>` reads `undefined`.
export const config: TestConfig = {
  // `$global.flag` is not serialized, so the resumed page reads it as
  // undefined.
  skip_settled: true,
  skip_optimize: true,
  equivalent: false,
  steps: [{ $global: { flag: true } }, click("button")],
};
