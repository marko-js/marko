import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// Registering turns a method into a plain function without `super`, so these
// stay unregistered: they run in the browser but cannot be serialized.
export const config: TestConfig = {
  steps: [{}, click, click],
  error_html: true,
  equivalent: false,
  skip_optimize: true,
};
