import type { TestConfig } from "../../../main.test";
import { type } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [{}, type("input", "1"), type("input", "10")],
};
