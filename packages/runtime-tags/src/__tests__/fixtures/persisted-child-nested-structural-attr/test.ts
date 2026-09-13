import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A plain attribute feeding a nested structural param from an import
// selects client-side.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}, click, click],
};
