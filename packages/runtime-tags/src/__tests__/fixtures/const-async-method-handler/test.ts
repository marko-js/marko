import type { TestConfig } from "../../main.test";

// An `async` method-shorthand handler must keep its `async` flag through
// function normalization (it would otherwise become a generator and its
// `await` would fail to compile).
function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, click],
};
