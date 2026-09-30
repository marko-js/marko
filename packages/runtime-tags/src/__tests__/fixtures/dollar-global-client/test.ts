import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    { $global: { x: 1, serializedGlobals: ["x"] } },
    click("button"),
    click("button"),
    click("button"),
  ],
};
