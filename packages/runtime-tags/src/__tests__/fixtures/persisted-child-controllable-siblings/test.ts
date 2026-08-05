import type { TestConfig } from "../../main.test";

const clickBoth = (document: Document) => {
  for (const button of document.querySelectorAll("button")) {
    button.click();
  }
};

// Two sibling controllables constructing in one frame: each bind entry
// carries its own child-link path, so both handlers land on the right
// instance (First 1, Second 2).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Store", show: true },
    { title: "Store!", show: false },
    { title: "Store!", show: true },
    clickBoth,
  ],
};
