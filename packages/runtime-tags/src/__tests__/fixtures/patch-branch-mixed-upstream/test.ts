import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A test mixing state with a fillable server value is stateful:
// patches re-render through the fill write, clicks through state.
export const config: TestConfig = {
  patches: true,
  steps: [{ min: 1 }, click, { min: 5 }, click, { min: 2 }],
};
