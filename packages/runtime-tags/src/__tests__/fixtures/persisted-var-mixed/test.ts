import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A return mixing a server param with child state recomputes client-side:
// the param fills into the child and the parent hole follows.
export const config: TestConfig = {
  persisted: true,
  steps: [{ n: 1 }, click, { n: 10 }, click],
};
