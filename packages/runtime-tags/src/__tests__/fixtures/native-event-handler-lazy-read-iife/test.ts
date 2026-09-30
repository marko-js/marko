import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{}, click(".bump"), click(".snap"), click(".bump"), click(".snap")],
};
