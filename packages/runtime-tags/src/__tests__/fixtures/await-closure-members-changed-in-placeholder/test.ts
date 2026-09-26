import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// `value.a` changes before the awaited content arrives, which still shows it.
export const config: TestConfig = {
  steps: [{}, click, flush, wait, click],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
