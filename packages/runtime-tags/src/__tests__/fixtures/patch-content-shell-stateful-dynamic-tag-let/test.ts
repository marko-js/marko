import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Content holding a stateful dynamic tag ships its shell, so its `<let>`
// takes a seed, though no step creates it.
export const config: TestConfig = {
  patches: true,
  steps: [{ on: true, label: "a" }, click, { on: true, label: "b" }],
};
