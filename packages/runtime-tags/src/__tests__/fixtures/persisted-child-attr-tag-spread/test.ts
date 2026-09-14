import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A spread on an attr tag carrying an imported value selects client-side.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}, click, click],
};
