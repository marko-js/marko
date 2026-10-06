import type { TestConfig } from "../../main.test";

// Content called directly and rendered as a value shares one setup, which
// marks its `<return>` for the dynamic tag's variable.
export const config: TestConfig = { steps: [{}, click, click] };

function click(document: Document) {
  document.querySelector("button")!.click();
}
