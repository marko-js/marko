import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Chained rest grains pass the walk through two property-less links:
// updates reach the deep read client-side.
export const config: TestConfig = {
  steps: [{}, click, click],
};
