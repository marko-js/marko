import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// The SSR runner stops at the first input update, so the transition coverage
// lives in the client run.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ tag: "div" }, { tag: undefined }, click("button"), { tag: "span" }],
};
