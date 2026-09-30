import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// The `async` shorthand method modifier must reach the generated function, or
// the `await` in its body compiles into a synchronous function.
export const config: TestConfig = {
  steps: [{}, click("button")],
};
