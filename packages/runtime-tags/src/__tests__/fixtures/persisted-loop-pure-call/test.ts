import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A call in a PURE-STATE sibling attr of a mixed loop is fine: only the
// attr that itself mixes server sources may not call.
export const config: TestConfig = {
  persisted: true,
  steps: [{ end: 2 }, click, { end: 3 }, click],
};
