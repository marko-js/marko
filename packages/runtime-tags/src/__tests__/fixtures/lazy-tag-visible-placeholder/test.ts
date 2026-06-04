import type { TestConfig } from "../../main.test";
import { flushRAF, flushVisible, wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// The @placeholder shows from the initial render because addAwaitCounter fires
// immediately (before IO). flushRAF lets the placeholder render; flushVisible
// triggers the IO which starts loading; wait resolves the load and replaces
// the placeholder with the child; click tests reactivity after load.
export const config: TestConfig = {
  steps: [{ value: 1 }, flushRAF, flushVisible, wait, click],
  equivalent: false,
};
