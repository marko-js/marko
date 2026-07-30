import type { TestConfig } from "../../main.test";

// A `<for>` whose only child is a non-exhaustive `<if>` has no boundary markers:
// an item's range is its branch while shown, and the bare anchor while hidden.
// Emptying every item, refilling, and reordering across a mix of both must keep
// the list in source order.
const press = (selector: string) => (document: Document) => {
  (document.querySelector(selector) as HTMLButtonElement).click();
};

export const config: TestConfig = {
  steps: [
    {},
    press("button.toggle"),
    press("button.toggle"),
    press("button.rotate"),
    press("button.toggle"),
    press("button.rotate"),
    press("button.drop"),
  ],
};
