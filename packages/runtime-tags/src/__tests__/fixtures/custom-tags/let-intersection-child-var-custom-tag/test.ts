import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {
      $global: { count: 0 },
    },
    click("button"),
    click("button"),
    click("button"),
  ],
};
