import type { TestConfig } from "../../main.test";

// The rejection surfaces only once the click's task ends, after the last step.
export const config: TestConfig = {
  steps: [{}, click],
  error_html: true,
  error_dom: true,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
