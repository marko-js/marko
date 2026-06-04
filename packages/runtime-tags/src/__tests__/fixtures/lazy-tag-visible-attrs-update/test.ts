import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// Two attr updates arrive before IO fires; both are buffered in the load
// values map and the final value is applied correctly once load completes.
export const config: TestConfig = {
  steps: [{}, click, click, flushVisible, wait, click],
  equivalent: false,
};
