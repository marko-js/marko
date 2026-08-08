import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A pure-param derived in a mixed selector fills as its computed value:
// the server ships the recomputed number, the client re-selects.
export const config: TestConfig = {
  persisted: true,
  steps: [{ min: 0 }, click, click, { min: 5 }, { min: 0 }],
};
