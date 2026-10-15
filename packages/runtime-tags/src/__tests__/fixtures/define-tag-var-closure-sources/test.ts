import type { TestConfig } from "../../main.test";

// A tag variable keeps the sources its `<define>` reads as closures: `x`
// follows `input.n`, which the page's state changes.
export const config: TestConfig = { steps: [{}, click, click] };

function click(document: Document) {
  document.querySelector("button")!.click();
}
