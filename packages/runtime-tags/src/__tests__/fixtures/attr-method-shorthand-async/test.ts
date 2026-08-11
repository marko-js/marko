import type { TestConfig } from "../../main.test";

// The `async` shorthand method modifier must reach the generated function, or
// the `await` in its body compiles into a synchronous function.
function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, click],
};
