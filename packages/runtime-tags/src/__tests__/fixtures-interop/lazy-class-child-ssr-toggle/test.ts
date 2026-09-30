import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Child starts visible in SSR so the preserved fragment markers are emitted.
// The child is hidden before the lazy load resolves, then shown again after
// load. This exercises the preserved fragment boundary through a hide/show
// cycle that crosses the async load boundary.
export const config: TestConfig = {
  steps: [{ show: true }, click("#toggle"), wait, click("#toggle")],
  equivalent: false,
};
