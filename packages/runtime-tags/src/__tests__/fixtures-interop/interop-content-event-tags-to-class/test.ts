import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  skip_optimize: true,
  steps: [{}, click("#inner"), click("#tags")],
};
