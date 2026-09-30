import type { TestConfig } from "../../../main.test";
import { type } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    type("textarea", "w"),
    type("textarea", "wor"),
    type("textarea", "world"),
  ],
};
