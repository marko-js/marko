import type { TestConfig } from "../../main.test";

// A debug build throws once a dynamic tag's variable is over content without a
// `<return>`, which the compiler cannot see.
export const config: TestConfig = {
  error_html: true,
  error_dom: true,
  skip_optimize: true,
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
