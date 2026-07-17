import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

// `.pending` is a refcounted reactive boolean: true while the act's promise is
// outstanding, false once it settles.
export const config: TestConfig = {
  steps: [{}, click, wait],
};
