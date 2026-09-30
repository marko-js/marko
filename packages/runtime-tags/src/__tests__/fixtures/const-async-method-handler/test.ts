import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// An `async` method-shorthand handler must keep its `async` flag through
// function normalization (it would otherwise become a generator and its
// `await` would fail to compile).
export const config: TestConfig = {
  steps: [{}, click("button")],
};
