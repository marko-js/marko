import type { TestConfig } from "../../main.test";
import { navigate, throws } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// An effect's error after a patch rendered is the app's, as on any client
// render: the patch stays applied rather than reloading the page.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, throws(navigate({ label: "b" })), click],
};
