import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// Two attr updates land before the lazy module resolves; both are buffered
// and the final value is applied correctly once setup runs.
export const config: TestConfig = {
  steps: [{}, click, click, wait, click],
  equivalent: false,
};
