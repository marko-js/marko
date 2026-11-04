import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-content-rebuilt-closure-state's closure, also captured by a function a
// child's effect calls: the effect re-runs once per change of the value.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: true }, { show: false }, click, { show: true }, click],
};
