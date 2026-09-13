import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The whole input mixed into a state test fills as one value.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, click, { a: 1 }],
};
