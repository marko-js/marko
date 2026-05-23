import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Child starts visible so the lazy import begins and the component is pushed
// into the waiting list. Before load resolves, the toggle hides the child,
// destroying the class component. When load resolves, forceUpdate() is called
// on the now-destroyed component — this should be a safe no-op.
export const config: TestConfig = {
  steps: [{}, toggle, wait],
  equivalent: false,
};

function toggle(container: Element) {
  (container.querySelector("#toggle") as HTMLButtonElement).click();
}
