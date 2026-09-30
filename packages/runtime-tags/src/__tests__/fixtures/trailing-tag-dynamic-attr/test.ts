import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  skip_csr: true,
  steps: [{}, click("button"), click("button")],
};
