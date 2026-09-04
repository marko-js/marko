import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A const rename of an input property delivers like the property itself:
// the alias applier recomputes its slot on every fill write.
export const config: TestConfig = {
  persisted: true,
  steps: [{ min: 1 }, click, click, { min: 5 }, { min: 0 }],
};
