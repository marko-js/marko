import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    { label: "x" },
    click("button"),
    click("button", 1),
    click("button", 2),
  ],
};
