import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ color: "red" }, click("button")],
  // The css var name embeds the template id, which differs by mode.
  skip_parity: true,
};
