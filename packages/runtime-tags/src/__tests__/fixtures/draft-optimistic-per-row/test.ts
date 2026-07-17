import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function removeFirst(container: Element) {
  container.querySelector("button")!.click();
}

// Each `<for>` row declares its own `<action>`, so removing one row shows that
// row's optimistic disappearance and only that row's `.pending`.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, removeFirst, wait],
};
