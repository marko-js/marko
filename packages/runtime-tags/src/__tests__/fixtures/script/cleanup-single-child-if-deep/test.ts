import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("button#inner"),
    click("button#middle"),
    click("button#outer"),
    click("button#inner"),
    click("button#middle"),
    click("button#outer"),
    click("button#outer"),
  ],
};
