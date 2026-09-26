import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// The delay lets the root `<script>`'s flush finish before the body streams,
// so the body resumes after `n` changed and its `<let>` keeps its initial value.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, () => new Promise((r) => setTimeout(r, 50)), flush, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
