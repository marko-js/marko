import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A written server value compared against the loop key: the keyed selector
// repaints the rows it leaves and selects.
export const config: TestConfig = {
  patches: true,
  steps: [{ selected: 1 }, click, { selected: 3 }, { selected: 2 }],
};
