import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// Templates rendering each other, the outer with client work: the page loads the
// inner's module through the outer's, so the inner's content shell ships no markup.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, click],
};
