import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click('script[type="importmap"]'),
    click('script[type="importmap"]'),
    click('script[type="importmap"]'),
  ],
};
