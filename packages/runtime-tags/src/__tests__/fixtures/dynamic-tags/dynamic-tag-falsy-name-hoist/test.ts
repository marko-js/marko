import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    { tag: null },
    click(".check"),
    click(".toggle"),
    click(".check"),
    click(".toggle"),
    click(".check"),
  ],
};
