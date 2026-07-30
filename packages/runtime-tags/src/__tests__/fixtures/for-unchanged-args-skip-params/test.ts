import type { TestConfig } from "../../main.test";

// A loop item whose args are unchanged skips its params pass, so the cases that
// must NOT be skipped are the interesting ones: a reorder changes the index
// while the item object stays identical, and replacing one item's object must
// update only that row. Re-rendering with an equal list must change nothing.
const press = (selector: string) => (document: Document) => {
  (document.querySelector(selector) as HTMLButtonElement).click();
};

export const config: TestConfig = {
  steps: [
    {},
    press("button.rotate"),
    press("button.bump"),
    press("button.resettle"),
    press("button.rotate"),
  ],
};
