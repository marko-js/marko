import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The lazy child heads the stream while it awaits; the counter's effects must
// not wait on the child's module, which never loads here.
export const config: TestConfig = {
  steps: [{}, flush, click],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
