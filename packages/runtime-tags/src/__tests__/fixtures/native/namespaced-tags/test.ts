import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {
      value: "<a href=#></a>",
    },
    click(".toggle-parent"),
    click(".toggle-parent"),
    click(".toggle-parent"),
    click(".toggle-child"),
    click(".toggle-child"),
    click(".toggle-child"),
  ],
};
