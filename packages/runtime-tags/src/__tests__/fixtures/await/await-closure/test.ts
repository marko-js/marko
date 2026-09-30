import type { TestConfig } from "../../../main.test";
import { after, flush } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    after(1),
    click("button"),
    after(2),
    click("button"),
    after(3),
    flush,
    after(5),
    click("button"),
  ],
};
