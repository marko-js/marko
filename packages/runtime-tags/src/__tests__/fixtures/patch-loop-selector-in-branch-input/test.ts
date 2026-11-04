import type { TestConfig } from "../../main.test";

const add = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A patch writing the value a loop inside a branch selects by: the write
// re-runs the branch's hop, which runs the selector on the branch's scope.
export const config: TestConfig = {
  patches: true,
  steps: [{ selected: 1 }, { selected: 2 }, add, { selected: 4 }],
};
