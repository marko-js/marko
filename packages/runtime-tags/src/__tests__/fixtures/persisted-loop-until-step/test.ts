import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An `until` range with a filled `step`: patches re-pace the range,
// clicks extend it, the client owns the listing.
export const config: TestConfig = {
  persisted: true,
  steps: [{ step: 1 }, click, { step: 2 }, { step: 3 }],
};
