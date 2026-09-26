import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// The lazy child's promise serializes once the `<try>` settled; the stream
// still waits on it and on the sibling `<await>`.
export const config: TestConfig = {
  steps: [{}, flush, flush, flush, click],
  equivalent: false,
  skip_csr: true,
};
