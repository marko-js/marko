import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A destructured input property is a canonical property binding (not an
// alias), so it promotes: the mixed selector fills through `min`.
export const config: TestConfig = {
  persisted: true,
  steps: [{ min: 1 }, click, { min: 5 }, click, { min: 2 }],
};
