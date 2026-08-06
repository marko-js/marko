import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A fill-deliverable state+server mix keeps both bits through two levels
// of composition: captures withhold while the fill feeds the live chain.
export const config: TestConfig = {
  persisted: true,
  steps: [{ base: 1 }, click, { base: 10 }, click],
};
