import type { TestConfig } from "../../main.test";
import { flushVisible, wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// Child is shown on first render so the IO observer attaches. Before IO fires,
// the toggle hides the child, destroying the scope. flushVisible then triggers
// the IO on the (still-observed) parent; the subsequent load resolves against
// the destroyed scope and should bail out gracefully without crashing.
export const config: TestConfig = {
  steps: [{}, click, flushVisible, wait],
  equivalent: false,
};
