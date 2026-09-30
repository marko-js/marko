import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [{ html: "<b>1</b><i>2</i>" }, click("button")],
};
