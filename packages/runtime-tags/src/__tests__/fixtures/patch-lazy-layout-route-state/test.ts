import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A route's `<let>` opens a lazy tag in its layout, a page whose own input
// carries the route's client state: the layout's module keeps the tag.
export const config: TestConfig = {
  patches: true,
  // Renders the whole document, which a client render cannot mount.
  skip_csr: true,
  steps: [{}, click, wait, click, click, wait],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
