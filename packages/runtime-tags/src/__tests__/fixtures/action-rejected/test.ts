import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// A rejected act releases its transaction: the guess rolls back to the
// confirmed source, `.pending` resets, and the rejection reaches the caller.
export const config: TestConfig = {
  steps: [{}, click, wait],
};
