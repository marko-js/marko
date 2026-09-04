import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The same mixed selector reaching the chain through a derived binding:
// the join recomputes from either side's write.
export const config: TestConfig = {
  persisted: true,
  steps: [{ min: 1 }, click, { min: 5 }, click, { min: 2 }],
};
