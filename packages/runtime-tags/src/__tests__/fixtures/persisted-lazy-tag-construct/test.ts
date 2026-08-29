import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A patch REVEALS the branch holding a not-yet-loaded lazy child: the shell
// ships the site's marker only, the construct starts the client-side load,
// and the loaded module drives the child's ready channel so the deferred
// frame data drains and the page becomes interactive.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [{ show: false, label: "a" }, { show: true, label: "a" }, wait, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
