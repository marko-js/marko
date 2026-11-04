import type { TestConfig } from "../../main.test";

// A `<define>` param compared with the loop key in a row effect, joined with a
// param every call passes state: the solve makes it a fill, so no selector.
const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};
const add = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.add")!.click();
};
export const config: TestConfig = {
  patches: true,
  steps: [{ sel: 1 }, { sel: 2 }, add, { sel: 4 }, toggle, { sel: 3 }, toggle],
};
