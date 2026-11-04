import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` call passes functions as its input's properties: an entry reading one
// depends on what the function captures, not on the input it is read from.
export const config: TestConfig = {
  patches: true,
  steps: [{ hint: "a" }, { hint: "b" }, click, { hint: "c" }],
};
