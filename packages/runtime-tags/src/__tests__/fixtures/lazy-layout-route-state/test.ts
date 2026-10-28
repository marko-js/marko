import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// patch-lazy-layout-route-state without patches.
export const config: TestConfig = {
  // Renders the whole document, which a client render cannot mount.
  skip_csr: true,
  steps: [{}, click, wait, click, click, wait],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
