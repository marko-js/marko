import type { TestConfig } from "../../../main.test";
import { type } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [{}, type("input", "w"), type("input", "wor"), type("input", "world")],
};
