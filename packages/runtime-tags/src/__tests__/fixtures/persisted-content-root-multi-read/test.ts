import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// One prop read as the tag name AND in a state intersection: the text's
// fill join and the tag signal compose on the same fill key, so a
// change updates both. Optimize shakes the tag signal (the intersection
// alone survives), so the change rejects there — asserted debug-only.
export const config: TestConfig = {
  persisted: true,
  skip_optimize: true,
  steps: [{ content: "div" }, click, { content: "span" }],
};
