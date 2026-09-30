import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click(".bump"),
    click(".a"),
    click(".b"),
    click(".toggle"),
    click(".a"),
    click(".b"),
    click(".toggle"),
    click(".bump"),
    click(".a"),
    click(".b"),
  ],
};
