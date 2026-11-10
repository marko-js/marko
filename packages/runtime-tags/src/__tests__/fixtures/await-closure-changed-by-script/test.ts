import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The delay lets the scripts flush before the body streams, so it resumes after
// `n` and the tag variables changed and its `<let>` keeps its initial value.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true },
    () => new Promise((r) => setTimeout(r, 50)),
    flush,
    click,
  ],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
