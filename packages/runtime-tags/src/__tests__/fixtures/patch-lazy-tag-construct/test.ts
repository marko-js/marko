import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A patch REVEALS the branch holding a not-yet-loaded lazy child: the child
// composes into the branch shell, and the flush waits for its module so
// the page is created whole and interactive in one run.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [{ show: false, label: "a" }, { show: true, label: "a" }, wait, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
