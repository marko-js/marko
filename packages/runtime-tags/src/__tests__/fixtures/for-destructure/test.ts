import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{}, click("#add"), click("#remove"), click("#remove"), click("#add")],
};
