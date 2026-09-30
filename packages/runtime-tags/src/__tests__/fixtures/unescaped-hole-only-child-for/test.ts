import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// A loop param feeds an unescaped hole that is the row's whole content: a new
// row renders it before joining the list, and removing a row removes all of it.
export const config: TestConfig = {
  steps: [{}, click("button.add"), click("button.add"), click("button.clear")],
};
