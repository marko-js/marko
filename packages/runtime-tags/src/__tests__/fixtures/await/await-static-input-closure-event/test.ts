import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ foo: "hello" }, flush, wait, click("button")],
};
