import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The lazy tag's module script streams in the body's reorder, which leaves the
// document while the body's `<await>` is pending; the script still loads.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, wait, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
