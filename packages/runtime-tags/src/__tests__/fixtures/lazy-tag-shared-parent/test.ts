import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// Two parents in the same directory that lazily import the same child from a
// subdirectory; both parents should share a single virtual lazy module for
// the child's signal rather than creating one per parent.
export const config: TestConfig = {
  steps: [{}, wait, click],
  equivalent: false,
};
