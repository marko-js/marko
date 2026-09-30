import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// `x` keeps its initial value while the class child re-renders before it.
export const config: TestConfig = {
  steps: [{}, click("button"), click("button")],
};
