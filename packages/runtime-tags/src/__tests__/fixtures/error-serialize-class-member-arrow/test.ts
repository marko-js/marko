import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// Registering moves an arrow away from the class member whose `this`,
// `arguments`, `super` and `new.target` it reads, so these stay unregistered.
export const config: TestConfig = {
  steps: [{}, click, click],
  error_html: true,
  equivalent: false,
  skip_optimize: true,
};
