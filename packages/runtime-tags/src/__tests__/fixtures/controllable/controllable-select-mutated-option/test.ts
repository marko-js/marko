import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click(".remove"),
    click(".remove"),
    click(".remove"),
    click(".add"),
    click(".add"),
    click(".add"),
  ],
};
