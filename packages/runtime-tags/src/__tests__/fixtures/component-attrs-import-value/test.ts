import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{}, click("button")],
  skip_csr: true,
  error_html: true,
};
