import type { TestConfig } from "../../main.test";

const add = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".add")!.click();
};
const removeFirst = (document: Document) => {
  document.querySelector<HTMLButtonElement>("li button")!.click();
};

// Handlers inside client-owned loop items mutate the listing state:
// per-item removal and growth survive interleaved patches.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, add, {}, removeFirst, {}],
};
