import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch a patch creates joins its own state with its owner's: every member
// arrives by its own init or seed, and the join's effect runs once.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, click, { show: true }, click],
};
