import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A dynamic tag variable reads the `<return>` of content whose only value is a
// loop param delivered by a local closure, so the content has no setup and no
// params of its own to carry the debug return mark.
export const config: TestConfig = {
  steps: [{}, click],
};
