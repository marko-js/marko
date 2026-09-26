import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A caught `<try>` keeps its catch content when its catch input updates.
export const config: TestConfig = {
  steps: [{}, click, click],
};
