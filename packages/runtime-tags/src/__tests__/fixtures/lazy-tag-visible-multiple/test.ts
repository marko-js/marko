import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// Two independent visible load children, each with their own IO trigger.
// Both become visible simultaneously; each IO fires independently and loads
// its own module. Reactivity continues working for both after load.
export const config: TestConfig = {
  steps: [{ value: 1 }, flushVisible, wait, click],
  equivalent: false,
};
