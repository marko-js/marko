import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A test mixing state with a fillable server value is client-owned:
// patches re-select through the fill write, clicks through state.
export const config: TestConfig = {
  persisted: true,
  steps: [{ min: 1 }, click, { min: 5 }, click, { min: 2 }],
};
