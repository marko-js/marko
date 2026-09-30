import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// `flag` is never allow-listed, so the resumed `<if>` reads `undefined`.
export const config: TestConfig = {
  skip_optimize: true,
  equivalent: false,
  steps: [{ $global: { flag: true } }, click("button")],
};
