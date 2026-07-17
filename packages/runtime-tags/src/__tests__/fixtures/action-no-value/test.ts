import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// A value-less `<action>` defaults to identity, so `apply(promise)` extends the
// transaction with that promise: `.pending` tracks it and the caller gets a
// promise resolving to the same value.
export const config: TestConfig = {
  steps: [{}, click, wait],
};
