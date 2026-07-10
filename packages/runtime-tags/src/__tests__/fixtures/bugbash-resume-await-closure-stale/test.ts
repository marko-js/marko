import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// Clicks the button while the awaited chunk is still in flight, then lets the
// chunk arrive; the late content closes over `count`.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, flush, wait, click, wait],
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
