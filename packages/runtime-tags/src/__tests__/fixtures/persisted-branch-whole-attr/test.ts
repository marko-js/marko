import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The whole input read inside client-owned structure fills as one value.
export const config: TestConfig = {
  persisted: true,
  steps: [{ a: 1 }, click, { a: 2 }, click, { a: 3 }],
};
