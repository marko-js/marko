import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A change handler fed straight from an input param: the fill can carry
// a bound registration, so the template ships the bind patchers.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click],
};
