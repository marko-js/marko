import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// The `count` write drives both the loop and the `<await>`: the list must
// hold its current items while the promise is pending and grow atomically
// with the resolved value at commit.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click, wait],
};
