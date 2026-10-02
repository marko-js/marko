import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The lazy tag streams its stylesheet inside a branch the client removes; a copy
// of it in the head stays for the tag's next render.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  steps: [{}, flush, wait, click, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
