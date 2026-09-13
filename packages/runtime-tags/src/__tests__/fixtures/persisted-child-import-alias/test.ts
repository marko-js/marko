import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An aliased import inside a client instance is client code too.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, {}, click, click],
};
