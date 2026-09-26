import type { TestConfig } from "../../main.test";

// `x` keeps its initial value while the class child re-renders before it.
export const config: TestConfig = {
  steps: [{}, click, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
