import type { TestConfig } from "../../main";

// A `<for>` whose only child is an `<if>` has no boundary markers of its own:
// each item's range IS whichever branch is rendered. Reordering, swapping the
// branch, and removing items must all keep the list in source order.
const press = (selector: string) => (document: Document) => {
  (document.querySelector(selector) as HTMLButtonElement).click();
};

export const config: TestConfig = {
  steps: [
    {},
    press("button.rotate"),
    press("button.toggle"),
    press("button.rotate"),
    press("button.drop"),
    press("button.toggle"),
  ],
};
