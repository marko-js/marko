import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A dynamic tag variable reads the `<return>` of content an attribute tag
// `<for>` created, which applies its loop values with its setup.
export const config: TestConfig = {
  steps: [{}, click],
};
