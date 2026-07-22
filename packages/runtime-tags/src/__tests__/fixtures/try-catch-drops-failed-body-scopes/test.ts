import type { TestConfig } from "../../main.test";

function clickOuter(document: Document) {
  document.querySelector("button")!.click();
}

// The failed <try> body's scope (child `n`) must be dropped from the resume
// payload, while the sibling `count` scope outside the try still serializes.
export const config: TestConfig = {
  steps: [{}, clickOuter],
};
