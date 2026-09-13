import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A loop listing state mixed with a fillable server value: patches
// re-list through the fill write, clicks through state.
export const config: TestConfig = {
  persisted: true,
  steps: [{ first: "f1" }, click, { first: "f2" }, click, { first: "f3" }],
};
