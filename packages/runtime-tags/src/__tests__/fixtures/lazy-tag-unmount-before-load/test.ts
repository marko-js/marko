import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Child is visible on first render so _lazy_setup fires immediately and
// the import starts. Before it resolves, the toggle hides the child,
// destroying the scope and removing the placeholder node. The subsequent
// wait lets the import resolve; applyLazyRenderer checks placeholder.parentNode
// and returns early instead of crashing or inserting into the detached tree.
export const config: TestConfig = {
  steps: [{}, click, wait],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
