import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Child starts visible so the load import begins and the component is pushed
// into the waiting list. Before load resolves, the toggle hides the child,
// destroying the class component. When load resolves, forceUpdate() is called
// on the now-destroyed component — this should be a safe no-op.
export const config: TestConfig = {
  steps: [{}, click("#toggle"), wait],
  equivalent: false,
};
