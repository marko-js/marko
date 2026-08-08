import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Server-selected structure chains inside client-owned structure: each
// level classifies outer-first and re-selects off its own fill.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { a: true, b: true },
    click,
    { a: true, b: false },
    { a: false, b: true },
    { a: true, b: true },
  ],
};
