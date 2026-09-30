import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click(".change"),
    click(".up"),
    click(".change"),
    click(".change"),
    click(".down"),
    click(".change"),
    click(".change"),
  ],
};
